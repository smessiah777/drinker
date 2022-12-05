import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <section id="hero" className="bg-white bg-hero-bg bg-contain bg-no-repeat bg-right h-screen flex flex-col ">
    <div  className="flex justify-center pt-4 z-10">
                  <Image 
                      src="/cocktail-icon.svg"
                      alt="drinker"
                      width={55}
                      height={55}
                    
                      />
                </div >
            
        <div className="flex justify-start items-center my-0 mx-auto w-[60rem] h-screen ">
                <div className="text-left pl-4">
                  <h1 className="text-9xl text-teal-600 font-unicaOne">Drinker</h1>
                  <p className="font-bebas text-5xl text-black leading-tight pt-2">
                    We can help<br/> 
                    <i>shake</i><br/> 
                    the party up 
                  </p>
                  <Link href="#search">
                    <button className="btn bg-teal-600 border-teal-600 border-2 text-white font-montserrat font-normal mt-7">Find Cocktails</button>
                  </Link>
                </div>
        </div>
    </section>
    </>
  )
}

export default Hero