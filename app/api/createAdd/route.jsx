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
        await connectMongo(); 
        
        
            
        if(request.method === 'POST'){

                // const openai = new OpenAI({
                //     apiKey: process.env.OPEN_AI_KEY
                // })

                
                

                // const res = await openai.images.generate({
                    
                //     prompt: body.imagePrompt , 
                //     n:1,
                //     size:'1024x1024'

                // })

                const {content} = body
                

                const discordUrl = 'https://discord.com/api/webhooks/1151194563281698876/VheoNK2V25oBaC3XLOx-_QsaAM2C5qIzj3ba6xk7mL5WFPHsZcICy6VRiXhG6iSSKxPL'
                try{
                    const discordRes = await fetch(discordUrl,{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        
                       
                    })
                    if(!discordRes.ok){
                        NextResponse.status(400).send('Failed to send message to Discord')
                    }

                }catch(error){

                    console.error('there is an error with the fetch')
                }




                
                const url = res.data[0].url
                
                const imgResult = await fetch(url)
                const arrayBuffer = await imgResult.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                
                const timestamp = Date.now()
                const filename = `imgAd_${body.titleName}.png`

                body.imageName = filename


                await fs.writeFile(`./public/imgCover/${filename}`, buffer)

                await CreateObj.create(body);


                NextResponse.status(200).send('The file has been saved');     
        }

    } 
    catch(error){
        console.error(error);
        NextResponse.status(500).json({ error: 'Internal Server Error' });
    }
    
    



    
    return NextResponse.json({result:'succesfull req', succes:true}, {status:201})
}

