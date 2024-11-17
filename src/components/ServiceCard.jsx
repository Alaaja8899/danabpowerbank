import React from 'react'

function ServiceCard({icon , title , desc}) {
  return (
    <div className='border border-violet-500 text-center flex items-center justify-center p-3 rounded md:w-[30rem] w-full h-[12rem] flex-col'>
        <div className="icon">
            {icon}
        </div>

        <h2 className="title font-bold text-2xl">
          {title}
        </h2>
        <p className="desc text-gray-500 font-medium">
        {desc}           
        </p>
    </div>
  )
}

export default ServiceCard
