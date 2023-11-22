import UserPost from "@/app/(models)/UserPost";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundUserPost = await UserPost.findOne({ _id: id });

    return NextResponse.json({ foundUserPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await UserPost.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Post has been deleted." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const userPostData = body.formData;

    const updateUserPost = await UserPost.findByIdAndUpdate(id, {
      ...userPostData,
    });

    return NextResponse.json({ message: "Post Updated." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
