import Image from 'next/image'
import React from 'react'
import image from '../../public/assets/images/footer.png'
import logo from '../../public/assets/images/logo.png'
const Footer = () => {
  return (
    <div className=''>
        <div className="flex h-full relative bg-primary">
            <Image src={image} alt='' />
            <Image src={logo} alt='' className='absolute left-[4rem] top-[37%] z-[3] w-[20rem]' />

        </div>
    </div>
  )
}

export default Footer