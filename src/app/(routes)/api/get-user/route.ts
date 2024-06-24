import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const userId: string = await req.json();
    const response = await clerkClient.users.getUser(userId);
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Could Not Get User" }, { status: 500 });
  }
}
