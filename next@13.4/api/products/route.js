import { NextResponse } from "next/server";
import dbConnection from "@/dbConnection";
import Product from "@/models/product";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnection();

    await Product.create(body);
    return NextResponse.json({ message: "" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "" }, { status: 500 });
  }
}
