import { type NextPage } from "next";
import Head from "next/head";
import { ReactQueryDevtools } from 'react-query/devtools'
import Hero from '../components/landing/Hero'
import Search from '../components/landing/Search'





const Home: NextPage = () => {
 return (
    <>
      
     
     
      <Head>
        <title>Drinker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>


      <Hero/>
      <Search/>

    </>
  )
}

export default Home;





