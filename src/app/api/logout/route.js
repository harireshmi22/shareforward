import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("sf_session");

    return NextResponse.json(
      {
        success: true,
        message: "Logged out successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to log out.",
      },
      { status: 500 }
    );
  }
}
