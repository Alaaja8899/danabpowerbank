import React, { useState } from 'react'

const Card = () => {
    const [plan , setPlan] = useState(0.5)
  return (
    <div className=' md:w-[40rem] w-full rounded border p-6 flex flex-col space-y-5'>
        <h2 className='font-medium text-violet-500 text-2xl text-center'>Choose Duration</h2>

<hr />
        <div className="plans flex gap-4">

            <button
            onClick={()=> setPlan(0.5)}
            className={`timer w-1/2 border p-3 rounded ${plan == 0.5 ? 'bg-violet-400 text-white':'border-violet-400'}`}>
                    1 hour 
            </button>
            <button 
            onClick={()=> setPlan(0.75)}
            className={`unlimited w-1/2 border rounded ${plan == 0.75 ? 'bg-violet-400 text-white':'border-violet-400'}`}>
                    Unlimited
            </button>

        </div>
        <hr />

        <div className="reciept text-center flex flex-col space-y-3">
            <h2 className='font-bold text-violet-500 text-2xl'>Amount to Pay:</h2>

            <p className='text-gray-600 font-bold text-2xl'>{`${plan}$`}</p>


        </div>

<hr />
        <form action="" className="payNumber">
            <h2>Phone number</h2>
            <input
            required
           oninvalid="this.setCustomValidity('Enter User Name Here')" 
           oninput="this.setCustomValidity('')"className='outline-none border rounded w-full p-3'
            type="tel" name='tel' maxLength={'9'} placeholder='61xxxxxxx |  77xxxxxxx'/>
            
            <div className="agreement flex gap-3 p-3">
                <input type="checkbox"  /> <p> I agree to the</p> <a href="#!" className='text-blue-700'> terms and conditions</a>
            </div>

            <button type="submit" className='bg-violet-500 w-full p-3 rounded text-white'>
                Submit
            </button>

            <br />

            <div className="details flex flex-col text-center my-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded p-3">
                <h2 className='font-bold text-3xl text-white'>Contact us</h2>

                <p>Muqdisho, Xamar Weyne, Somalia</p>

                <div className="links underline flex flex-col">
                <a href="#!">danabpowerbank@gmail.com</a>
                <div className="numbers flex gap-3 items-center justify-center">
                <a href="#!">+252616251068</a>
                <a href="#!">+252616586503</a>

                </div>

                </div>

        </div>

        </form>


    </div>
  )
}

export default Card
