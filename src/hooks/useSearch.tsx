import {useState} from 'react';
import { useQuery } from 'react-query';
import useDebounce from './useDebounce';

export const useSearch = () => {

    
    const [userInput,  setUserInput] = useState<string>('negroni')
    
    const fetchDrinks = async(userInput:string) => {
        const drinkFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`);
        const res = drinkFetch.json();
        return res 
                
     }
     

            
    const debouncedFilter = useDebounce(userInput, 500);
    const { data, isLoading } = useQuery(
        ['products', debouncedFilter], 
        () => fetchDrinks(debouncedFilter),
        { enabled: Boolean(debouncedFilter) }
    )
      

    return {data, isLoading, setUserInput}
}


