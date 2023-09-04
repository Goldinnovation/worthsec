import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@assets/home.png'
import PoolIcon from '@assets/pool.png'
import JobIcon from '@assets/job.png'
import EmailIcon from '@assets/email.png'
import EbbyImg from '@assets/ebby.png'


const Nav = () => {
  return (
    <>
     <section className="nav_area">
      <div className='profil-image'>
        <Image src={EbbyImg} alt='Profil Image' className='Pro-Image' height={100} width={100} />
      </div>

       <nav className="nav_content">
       <Link href={'/'}>
          <Image src={HomeIcon} alt='Home Icon' className='HomeIcon'/>
       </Link>
       <Link href={'/pool'}>
          <Image src={PoolIcon} alt='Pool Icon' className='PoolIcon'/>
        </Link>
       <Link href={'/job'}>
          <Image src={JobIcon} alt='Job Icon ' className='JobIcon'/>
       </Link>
       <Link href={'/settings'}>
         <Image src={EmailIcon} alt='Email Icon' className='EmailIcon'/>
       </Link>
       </nav>
      </section>
      
    </>
  )
}

export default Nav
