import React from 'react'
import logoImg from '../assets/images/logo.svg'


const Header = () => {
  return (
    <div className='flex min-h-[84px] border w-full shadow justify-between items-center p-6 static top-0'>
      <a href="#!" className="logo border-red-400 border">
        <img className='h-[83px] w-[200px]' src={logoImg} alt="danabLogo Image" />
      </a>


      <nav className='md:flex hidden gap-5 items-center '>
        <a href="#!"
        className='rounded-full bg-blue-500 p-3 px-6 w-[11rem] text-center text-white'
        >
        Home
        </a>
        <a href="#!"
        className='rounded-full bg-green-500 p-3 px-6 text-white w-[11rem] text-center'
        >
          ServiceBooking
        </a>
        <a href="#!"
        className='rounded-full bg-yellow-500 p-3 px-6 text-white w-[11rem] text-center'
        >
          Dashboard
        </a>
      </nav>
    </div>
  )
}

export default Header
