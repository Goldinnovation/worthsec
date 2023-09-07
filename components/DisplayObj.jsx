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
                    <Link className="added-obj" href={`api/createAdd/${t._id}`}>
                    <div className='img-area'>
                    <div className='added-title-content'> 
                    <h2 className='added-title-name'>{t.titleName}</h2>
                    </div>
                    </div>  
                    </Link>
                
                    {/* <div className='description-field'>
                     {t.descripfield}
                    </div> */}
                
            </div>
            </section>
            
        ))
       
    }  
      
    </div>
  )
}

export default DisplayObj
