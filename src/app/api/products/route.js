import { dbConnection } from "@/lib/db";
import {product} from "@/lib/models/product";
import { NextResponse } from "next/server";


await  dbConnection();
export async function GET() {
  let data = [];
  try {
    data = await product.find();
  } catch (error) {
    data = { result:"error" };
  }
  return NextResponse.json({ result: data, success: true }, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  console.log(payload)
  const newProduct = await new product(payload);
  const result = await newProduct.save();
  return NextResponse.json({ result, success: true }, { status: 200 });
}
