import React from 'react'
import  '@styles/global.css'
import Nav from '@components/Nav'





const Rootlayout = ({children}) => {
  return (
    <>
    <html>
      <body>
      <Nav/>
        {children}
    
      </body>
      
    </html>
       
    </>
  )
}

export default Rootlayout
