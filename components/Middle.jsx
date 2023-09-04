import React from 'react'
import DisplayObj from './DisplayObj'
import Addbtn from '@utils/Addbtn'


const Middle = () => {
  return (
    <div>
      <section className="middle-area">
            <div className="middle_content">
                <DisplayObj/>
               <div className="create-btn">
                <Addbtn/>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Middle
