import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@assets/home.png'
import PoolIcon from '@assets/pool.png'
import JobIcon from '@assets/job.png'
import EmailIcon from '@assets/email.png'
import ProImage from '@assets/ebby.png'


const Nav = () => {
  return (
    <>
    
     <section className="nav_area">
      <div className='profil-image'>
        <Image src={ProImage} alt='Profil Image' className='ProImage' height={100} width={100} />
      </div>

      <div className='website-title'><h2>WORTHSEC</h2></div>
      
       <nav className="nav_content">
       <Link href={'/'}>
          <Image src={HomeIcon} alt='Home Icon' className='HomeIcon' height={35} width={35} />
       </Link>
       <Link href={'/pool'}>
          <Image src={PoolIcon} alt='Pool Icon' className='PoolIcon'  height={35} width={35}/>
        </Link>
       <Link href={'/job'}>
          <Image src={JobIcon} alt='Job Icon ' className='JobIcon'  height={35} width={35}/>
       </Link>
       <Link href={'/settings'}>
         <Image src={EmailIcon} alt='Email Icon' className='EmailIcon'  height={35} width={35}/>
       </Link>
       </nav>
      </section>
      
    </>
  )
}

export default Nav
