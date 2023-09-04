'use client'; 
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';



const Addbtn = () => {


    const [inputData, setData] = useState({
        titleName: "", 
        Note: "",
        QnA: "", 
        Journal: "", 
        imagePrompt: "",
        colorOpt: "",
        descripfield: ""
    })
    
    const router = new useRouter()

    const [modal, setModal] = useState(false); 

    const togglemodel = () => {
        setModal(!modal)
    }


    const handleClose = () => {
        togglemodel(); 
      };


 

    const handleInput = (e) => {
        setData({...inputData, [e.target.className]: e.target.value})
    };

    const handleCheckboxInput = (e) => {
        setData({...inputData, [e.target.className]: e.target.checked})
    };
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch('/api/createAdd', {
                method: 'POST', 
                body: JSON.stringify(inputData)
            })

            
            router.refresh();
            togglemodel();
           


        } 
      
        catch (error){
            console.error('res issue')
        }

    };


    


  return (
    <div>
        {/* btn area  */}
        {modal && (
            <div className="Modal">
            <div className="overlay">
                <div className="modal-content">
                    <div className="close-btn-area">
                    <button onClick={handleClose} className='Close-btn'>close</button>
                    </div>
                    {/* title area  */}
                    <div className="title-area">
                    <h2>Create your Notex </h2></div>


                    {/* Option area with name input */}
                    <form
                     onSubmit={handleSubmit}>
                    <div className="option-area">
                        <div className="optitlet-area">
                        <h3>Title Name: </h3>
                        <input type="text" className='titleName' onChange={handleInput} /> 
                        </div> 
                        <div className="selecopt-area">
                       
                        <div className="check-container-area">
                        
                        <label className="check-container1">
                            <p>Note</p>
                            <input type="checkbox" className="Note" onChange={handleCheckboxInput} />
                        </label>
                        <label className="check-container2">
                            <p>Q&A</p>
                            <input type="checkbox" className="QnA" onChange={handleCheckboxInput}  />
                        </label>
                        <label className="check-container3">
                            <p>Journal</p>
                            <input type="checkbox" className="Journal" onChange={handleCheckboxInput}  />
                        </label>
                        </div>
                        </div> 
                    </div>
                   
                   <div className="prompt-color-area">
                    <div className="image-area">
                    <h3>Cover: </h3>
                    <input type="text"  className='imagePrompt' onChange={handleInput}/>
                    </div>
                    <select className='colorOpt' onChange={handleInput} >
                        <option value="0">Colors</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="pink">pink</option>
                        <option value="blue">blue</option>
                    </select>
                    </div>
                    <div className="description-area">
                        <div className='decripTxt'>
                            <h3>Description</h3>
                            <input type="text" className='descripfield' onChange={handleInput}  />
                        </div>
                    </div>
                    
                        <button type='submit'>submit</button>
                    </form>
                </div> 
            </div>
            </div>
        )}
        
        <button onClick={togglemodel} className='add-btn'>+</button>
    </div>
  )
    
  
}

export default Addbtn


