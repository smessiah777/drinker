import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DrinkSearch from "../components/drinks/InputField";
import DrinkList from '../components/drinks/DrinkList'
import InputField from "../components/drinks/InputField";



const Home: NextPage = () => {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [userInput,  setUserInput] = useState<string>('negroni')
  
 
    const { isLoading, error, data } = useQuery('cocktailData', () =>
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`).then(res =>
      res.json()
    )
  )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    if(data && data.data) setDrinks(data.data)


 



      

  return (
    <>
      <Head>
        <title>Drinker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
        {/* <InputField/> */}
      
        <DrinkList drinksData={drinks} />
     
        
    </>
  );
};

export default Home;





