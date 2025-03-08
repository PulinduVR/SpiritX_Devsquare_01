import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("auth-token");

  return NextResponse.json({ success: true }, { status: 200 });
}
