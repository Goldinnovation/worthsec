import { NextResponse } from "next/server";
import connectMongo from "@utils/connectMongo";
import CreateObj from "@model/inputModel";



export async function GET(){
    await connectMongo(); 
    const createdObj = await CreateObj.find();
    
    return NextResponse.json({createdObj})
}




export async function POST(request){
    const body = await request.json()
   
    await connectMongo(); 
    await CreateObj.create(body);

    
    return NextResponse.json({result:'succesfull req', succes:true}, {status:201})
}

