import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import { FaChargingStation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPriceCheck } from "react-icons/md";


const services = [
  {
    icon:<FaChargingStation size={32} color='violet'/>,
    title:"Fast Charging",
    desc:"Get your devices charged quickly with our advanced technology"
  },
  {
    icon:<FaLocationDot size={32} color='violet'/>,
    title:"Convenient Locations",
    desc:"Find charging stations at various convenient locations"
  },
  {
    icon:<MdPriceCheck size={32} color='violet'/> ,
    title:"Affordable Rates",
    desc:"Enjoy competitive pricing with no hidden fees."
  },
]


function Home() {
  return (
    <div className=''>
        <Header/>
        <HeroSection/>
        <hr />
        
        <div className="why container p-6">
          <h2 className='text-gray-600 font-bold text-2xl text-center my-4'>Why Choose Us?</h2>

          <div className="cards-services flex flex-wrap items-center justify-between gap-3">
            {services.map(card=>{
              return <ServiceCard icon={card.icon} title={card.title} desc={card.desc}/>
            })}
          </div>
        </div>
        <hr />
        <div className="how container p-6">
          <h2 className='text-gray-600 font-bold text-2xl text-center my-4'>How It Works</h2>

          <div className="cards-services flex flex-wrap items-center justify-between gap-3">
            {services.map(card=>{
              return <ServiceCard icon={card.icon} title={card.title} desc={card.desc}/>
            })}
          </div>
        </div>


    </div>
  )
}

export default Home
