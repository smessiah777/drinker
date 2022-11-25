import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DrinkSearch from "../components/drinks/InputField";
import DrinkList from '../components/drinks/DrinkList'
import InputField from "../components/drinks/InputField";



const Home: NextPage = () => {
 return (
    <>
      <Head>
        <title>Drinker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
        {/* <InputField/> */}
      
        <DrinkList />
     
        
    </>
  );
};

export default Home;





