import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroImg from './assets/hero.jpg'

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  position: "relative",
}

const App = () => {
  return (
    <div className='overflow-x-hidden bg-brandDar text-white'>
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
