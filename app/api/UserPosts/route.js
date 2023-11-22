import UserPost from "@/app/(models)/UserPost";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const userPostData = body.formData;

    await UserPost.create(userPostData);

    return NextResponse.json(
      { message: "User Post Created." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const userposts = await UserPost.find();
    return NextResponse.json({ userposts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
