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
    console.log(body.imagePrompt)
    await connectMongo(); 
    await CreateObj.create(body);
    
    if(request.method === 'POST'){
        try{
            const res = await fetch()
        }catch(error){

        }
    }



    
    return NextResponse.json({result:'succesfull req', succes:true}, {status:201})
}

