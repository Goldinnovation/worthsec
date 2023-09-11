import { NextResponse } from "next/server";
import connectMongo from "@utils/connectMongo";
import CreateObj from "@model/inputModel";
import OpenAI from "openai";
import {promises as fs } from 'fs'





export async function GET(){
    await connectMongo(); 
    const createdObj = await CreateObj.find();

    return NextResponse.json({createdObj})
}




export async function POST(request){
    try{
        const body = await request.json()
        console.log(body.imagePrompt)
        await connectMongo(); 
        await CreateObj.create(body);
        console.log('API Key:',process.env.OPEN_AI_KEY)
            
        if(request.method === 'POST'){

                const openai = new OpenAI({
                    apiKey: process.env.OPEN_AI_KEY
                })

                
                

                const res = await openai.images.generate({
                    
                    prompt: body.imagePrompt , 
                    n:1,
                    size:'1024x1024'
                })
                
                
                const url = res.data[0].url
                console.log(url)
                const imgResult = await fetch(url)
                const arrayBuffer = await imgResult.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                
                const timestamp = Date.now()
                const filename = `imgAd_${timestamp}.png`


                const newimg = fs.writeFile(`./imgCover/${filename}`, buffer)

                NextResponse.status(200).send('The file has been saved');     
        }

    } 
    catch(error){
        console.error(error);
        NextResponse.status(500).json({ error: 'Internal Server Error' });
    }
    
    



    
    return NextResponse.json({result:'succesfull req', succes:true}, {status:201})
}

