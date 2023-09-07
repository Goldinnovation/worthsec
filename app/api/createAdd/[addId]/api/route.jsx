import { NextResponse } from "next/server";
import connectMongo from "@utils/connectMongo";
import CreateObj from "@model/inputModel";



export async function GET(request,{params}){
    const id = params.addId
    await connectMongo(); 
    const getId = await CreateObj.findById({_id: id})

    return NextResponse.json({getId})
}


