import {useRouter} from 'next/router'
import useSearchId from '../../hooks/useSearchId'
import { ReactQueryDevtools } from 'react-query/devtools'


interface IDrink{
 
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;


  }
 


const Details = () => {
    const { 
        query: { id }
    } = useRouter();

  

    

  
    
    const {data, status, error} = useSearchId(id);
    
    if (status === 'error') {
        return  console.log(`useSearchId error ${error.message}`);

      } 

    return (
        <>
        <ReactQueryDevtools initialIsOpen={false}/>
        <div className="flex justify-center flex-col text-center">
        {data?.drinks !== null ?
         data?.drinks.map((drink: IDrink ) => (
                
                <>
                <h1>This is the drink id : {id}</h1>
                <br/>
                <h2>
                        {drink.idDrink} <br/>
                        {drink.strDrink}
    
                </h2>
                </>
    ))  : []   }

          

            
        </div>
          
        </>
  )
}

export default Details