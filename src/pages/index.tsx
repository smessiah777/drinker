import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { QueryClient, QueryClientProvider} from 'react-query'
import DrinkSearch from "../components/drinks/InputField";
import DrinkList from '../components/drinks/DrinkList'
import InputField from "../components/drinks/InputField";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const Home: NextPage = () => {
 return (
    <>
      <Head>
        <title>Drinker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <QueryClientProvider client={queryClient}>

        {/* <InputField/> */}
        <DrinkList />

      </QueryClientProvider>
      
     
        
    </>
  );
};

export default Home;





