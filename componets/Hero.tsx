"use client"
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book or rent a car - quicky and easily!
            </h1>
                <p className='hero-subtitle'>
                    streamline your car rental experience
                    with our effortless booking process.
                </p> 

                <CustomButton
                title="Explore Car →"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}/>
            </div>
            <div className='hero__image-contaier'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt='hero'
                    fill className='object-contain'/>
                    
                    <div className='hero__image-overlay'/>
                </div>
            </div>
        </div>
  )
}

export default Hero