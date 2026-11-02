import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        // Validate input fields
        if (!name || !name.trim()) {
            return NextResponse.json(
                { success: false, error: "Full name is required." },
                { status: 400 }
            );
        }

        if (!email || !email.trim()) {
            return NextResponse.json(
                { success: false, error: "Email address is required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        if (!password || password.length < 6) {
            return NextResponse.json(
                { success: false, error: "Password must be at least 6 characters long." },
                { status: 400 }
            );
        }

        // Connect to database
        await dbConnect();

        const normalizedEmail = email.trim().toLowerCase();

        // Check if user already exists
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return NextResponse.json(
                { success: false, error: "An account with this email address already exists." },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in MongoDB
        const newUser = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
        });

        // Create session token payload
        const sessionPayload = {
            sub: newUser._id.toString(),
            email: newUser.email,
            name: newUser.name,
            createdAt: newUser.createdAt,
        };
        const token = Buffer.from(JSON.stringify(sessionPayload)).toString("base64");

        const cookieStore = await cookies();
        cookieStore.set("sf_session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return NextResponse.json(
            {
                success: true,
                message: "User registered successfully.",
                user: {
                    id: newUser._id.toString(),
                    name: newUser.name,
                    email: newUser.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Register API error:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Failed to register user." },
            { status: 500 }
        );
    }
}
