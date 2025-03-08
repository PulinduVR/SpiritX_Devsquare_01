import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export async function GET() {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = verify(
      token,
      process.env.NEXTAUTH_SECRET || "fallback_secret"
    ) as { username: string };

    return NextResponse.json({ username: decoded.username });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
