import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/pic2.png)] bg-cover"
    style={{backgroundSize: "45%", backgroundPosition:"left 100px top 120px"}}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[100px] font-bold leading-tight flex justify-center items-center" >
          <div>
            <p>I am</p>
            <p>Syed Irfan</p>
            <p> Hussain Zaidi</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
