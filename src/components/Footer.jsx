import React from 'react'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-violet-600 to-indigo-600 p-6'>
        
        <div className="feedback">
                <form 
                className='flex flex-col gap-3'
                >
                    <h2 className='font-bold text-white text-3xl text-center'>Feedback</h2>
                    <p className='text-center text-white font-medium'>Write down here your feedback or any complaint you have </p>
                    <input 
                    className='outline-none border rounded p-3 border-violet-300'
                    type="text" placeholder='Your Name' />
                    <input 
                    className='outline-none border rounded p-3 border-violet-300'
                    type="tell" placeholder='Phone Number' />
                    <textarea 
                    className='resize-none p-3 rounded'
                    name="text" id="text" placeholder='Your feedback | complaint..'>
                    </textarea>
                    <button
                    className='bg-white border b rounded p-3'
                    >Submit Now !</button>
                </form>
        </div>

        <div className="details flex flex-col text-center my-6 text-white">
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

    </div>
  )
}

export default Footer
