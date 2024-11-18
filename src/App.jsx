import React from 'react'
import Card from './components/Card'
import Home from './pages/Home'
import { useGlobalContext } from './components/context/GlobalContext'
import Header from './components/Header'

function App() {
  const {renting} = useGlobalContext()
  
  return (
    <div className=''>
        <Header/>
      {renting ? <div className="renting flex items-center justify-center min-h-screen"><Card/></div>:<Home/>}



    </div>
  )
}

export default App
