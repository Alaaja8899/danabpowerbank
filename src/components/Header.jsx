import React, { useState } from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useGlobalContext } from './context/GlobalContext';

function Header() {
  const {setRenting} = useGlobalContext()
  const[menu ,setMenue] = useState(false)
  return (
    <div className='flex items-center justify-between p-6 bg-white border-b-2 border-violet-500  h-[83px]  sticky top-0'>
       
      <h2
      className=' text-2xl font-bold'
      ><a href="#!"
      className='flex items-center justify-center'
      >Da <AiFillThunderbolt color='violet'/>  ab powerBank</a></h2>


        <nav className={`flex ${menu ? 'absolute md:relative md:top-0 md:bg-none bg-white':'hidden md:flex'}  flex-col md:flex-row left-0 p-6   border md:border-none   border-e-violet-400 w-full md:w-fit  top-full  gap-5`}>
          <a
          onClick={()=> {
            setRenting(false)
            setMenue(false)
          }}
          href="#!" className='bg-blue-500 rounded px-6 py-2 text-white'>
            Home            
          </a>
          <a 
          onClick={()=> {
            setRenting(true)
            setMenue(false)
          }}
          href="#!" className='bg-green-500 rounded px-6 py-2 text-white'>
            ServiceBooking
          </a>
          <a href="#!" className='bg-yellow-500 rounded px-6 py-2 text-white'>
            Dashboard
          </a>
        </nav>

        <div onClick={()=> setMenue(!menu)}
        className="md:hidden flex   menue cursor-pointer"
        >
            <IoMenu size={32}/>
        </div>



    </div>
  )
}

export default Header
