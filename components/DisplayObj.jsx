import React from 'react'
import Link from 'next/link'


export async function getInput(){
    try{
        const res = await fetch('http://localhost:3000/api/createAdd',{
        method: 'GET',
        cache: 'no-store'
        
        })

        if(!res.ok){
            console.log('Problem with GET fetch')
        }

        
        const data = await res.json()
               
        return data
    }catch (error){
        console.error('Error on catch the GET ')
    }
}
   

const DisplayObj = async() => {
    const {createdObj} = await getInput(); 
    

  return (
    <div className="contentSection">
         {createdObj.map((t,i) => (
            <section className="newSection">
                <div key={i} className="content-area">
                <div className='name-area'>
                    <Link href={`api/createAdd/${t._id}`}>
                    <h2 className='title-name'>{t.titleName}</h2>
                    </Link>
                    <div>
                     {t.descripfield}
                    </div>
                </div>  
            </div>
            </section>
            
        ))
       
    }  
      
    </div>
  )
}

export default DisplayObj
