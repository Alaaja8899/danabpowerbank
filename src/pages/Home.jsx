import React from 'react'
import Header from '../components/Header'
import stationImage from '../assets/images/tank.jpg'

function Home() {
  return (
    <div>
        <Header/>

        <div className="hero-section flex p-6 items-center md:flex-row flex-col justify-center text-center">

            <div className="content md:w-1/2 flex space-y-4 flex-col ">
                    <h2 className='text-gray-700 text-5xl font-medium'>
                    Is your mobile running out of
                    </h2>
                    <h1 className='text-blue-500 font-bold text-6xl'>
                    BATTERY?

                    </h1>
                    <p className='text-2xl'>
                    Rent a POWER RENT near you and charge your mobile phone, tablet, or whatever you need, no matter where you are in Sevilla.
                    </p>
                    <button 
                    className='bg-violet-500 rounded p-3 text-white'
                    >Rent Now !</button>
            </div>

            <div className="img md:w-1/2">
                <img src={stationImage} alt="station powerBank image" />
            </div>

        </div>


    </div>
  )
}

export default Home
