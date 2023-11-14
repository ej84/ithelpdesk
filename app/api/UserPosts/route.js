import UserPost from "@/app/(models)/UserPost";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const userpostData = body.formData;

    await UserPost.create(userpostData);

    return NextResponse.json(
      { message: "User Post Created." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
