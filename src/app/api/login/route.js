import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    const normalizedEmail = email.trim().toLowerCase();

    // Find user by email
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Create session token payload
    const sessionPayload = {
      sub: user._id.toString(),
      email: user.email,
      name: user.name,
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
        message: "Logged in successfully.",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to log in." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("sf_session");

    if (!sessionCookie?.value) {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 200 }
      );
    }

    let payload;
    try {
      payload = JSON.parse(
        Buffer.from(sessionCookie.value, "base64").toString("utf-8")
      );
    } catch {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 200 }
      );
    }

    if (!payload?.sub) {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 200 }
      );
    }

    await dbConnect();
    const user = await User.findById(payload.sub).select("-password");

    if (!user) {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        authenticated: true,
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get session error:", error);
    return NextResponse.json(
      { authenticated: false, user: null, error: "Failed to retrieve session." },
      { status: 500 }
    );
  }
}
