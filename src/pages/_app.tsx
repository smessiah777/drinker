import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  
    
    
    
};

export default MyApp;
