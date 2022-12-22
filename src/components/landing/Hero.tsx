import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <section id="hero" className="bg-white bg-hero-bg md:bg-hero-bg lg:bg-contain bg-no-repeat lg:bg-right h-screen flex flex-col md:bg-cover md:bg-bottom xs:bg-cover xs:h-screen">
          
          <div className="pt-20 lg:invisible lg:hidden">
              <h1 className="text-7xl text-teal-600 font-unicaOne text-center">Drinker</h1>
             
                    
          </div>


          <div className="flex justify-center h-screen pb-8 lg:invisible lg:hidden">
                    <Link href="#search" className="self-end" >
                      <button className="btn bg-teal-600 border-teal-600 border-2 text-white font-montserrat font-normal tracking-wide  hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Find Cocktails</button>
                    </Link>

          </div>
         
        

                
          
          
          <div className="lg:flex justify-center pt-4 z-10 lg:visible  md:invisible  sm:invisible xs:invisible xs:hidden">
                <Link href="#search">
                    <Image 
                      src="/cocktail-icon.svg"
                      alt="drinker"
                      width={55}
                      height={55}
                      className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                      />
                </Link>
          </div>
            
          <div className="sm:invisible xs:invisible xs:hidden md:invisible lg:visible lg:flex justify-start items-center my-0 mx-auto w-[60rem] h-screen ">
                <div className="text-left pl-4">
                    <h1 className="text-9xl text-teal-600 font-unicaOne">Drinker</h1>
                    <p className="font-bebas text-5xl text-black leading-tight pt-2">
                      We can help<br/> 
                      <i>shake</i><br/> 
                      the party up 
                    </p>
                    <Link href="#search">
                      <button className="btn bg-teal-600 border-teal-600 border-2 text-white font-montserrat font-normal tracking-wide mt-7 hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Find Cocktails</button>
                    </Link>
                </div>
          </div>
    </section>
    </>
  )
}

export default Hero