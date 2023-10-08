import { product } from "@/lib/models/product";
import { NextResponse } from "next/server";


export async function PUT(req, content) {
  console.log(content);
  const productId = content.params.productid;
  const filter = { _id: productId };
  let payload = await req.json();
  console.log(payload);
  console.log(filter);

  const result = await product.findOneAndUpdate({ filter, payload });
  return NextResponse.json({ result, success: true });
}

export async function GET(req, content) {
  const productId = content.params.productId;
  const record = { _id: productId };
  const result = await product.findById(record);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(req,content){
  const productId=content.params.productId
  const record={_id:productId}
  await dbConnection();
  const result=await product.deleteOne(record)
  return NextResponse.json({result,success:true})
}