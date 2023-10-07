import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, res) {
  const userData = user.filter((item) => item.id == res.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "NO Dta FOUND", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(req, content) {
  let payload = await req.json();
  payload.id = content.params.id;
  if ((!payload.name, !payload.age, !payload.email || !payload.id)) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(req,content){
    let id=content.params.id
    if(id){
      return NextResponse.json({result:"User deleted",success:true},{status:200})
    }else{
      return NextResponse.json({result:"User is not valid",success:false},{status:400})
    }
}