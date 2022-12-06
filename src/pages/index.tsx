import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactQueryDevtools } from 'react-query/devtools'
import Hero from '../components/landing/Hero'
import DrinkList from '../components/drinks/DrinkList'




const Home: NextPage = () => {
 return (
    <>
      <ReactQueryDevtools initialIsOpen={false}/>
     
     
      <Head>
        <title>Drinker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unica+One&display=swap" rel="stylesheet"></link>
      </Head>


      <Hero/>

        <div id="search" className="flex flex-col items-center pt-5">

          

            
            <DrinkList />
            
        

        </div>
      
     
        
    </>
  );
};

export default Home;





