import React from 'react'
import thugIMG from '../assets/images/tank.jpg'
function HeroSection() {
  return (
    <div className='container p-6 flex items-center md:flex-row flex-col'>

        <div className="conent text-center flex flex-col gap-5 md:w-1/2">
            <h2 
            className='text-gray-500 font-medium md:text-5xl text-4xl'
            >
            Is your mobile running out of

            </h2>
            <h2 className='md:text-5xl text-4xl font-bold text-violet-500'>
            BATTERY?
            </h2>
            <p className='text-2xl'>
            Rent a POWER RENT near you and charge your mobile phone, tablet, or whatever you need, no matter where you are in Xamar.
            </p>

            <button
            className='bg-violet-500 rounded p-3 text-white'
            >
                Rent Now !
            </button>
        </div>
        <div className="image md:w-1/2">
                <img src={thugIMG} alt="" />
        </div>

    </div>
  )
}

export default HeroSection
