import React from 'react'


export  async function getAdd(addId){

    
    try{
        const res = await fetch(`http://localhost:3000/api/createAdd/${addId}/api`,
        {
            headers:{
                method: 'GET', 
               'Content-Type': 'application/json'

            }
            
        }
        )
        if(!res.ok){
            console.log('invalid res')
        }

        const data = res.json()
        return data 

    }
    catch(error){
        console.error('fetch problem')
    }

    
  
}


 
export default async function addpage({params}){ 

    const paramId = params.addId
    const {getId}= await getAdd(paramId);
    
    

        
  return (
    <>
    <div>
        <h2>{getId.titleName}</h2>

    </div>
    
    
        
    </>
  )
}