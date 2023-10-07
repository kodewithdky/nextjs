import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req, res) {
  let payload = await req.json();
  console.log(payload);
  if (!payload.name || !payload.email || !payload.age) {
    return NextResponse.json({ message: "required feald not found" });
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}
