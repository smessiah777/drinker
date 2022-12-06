import {useState, useMemo} from 'react';
import { useQuery } from 'react-query';
import useDebounce from './useDebounce';




type Drinks = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
}

export const useSearch = () => {
    
    
    const [userInput,  setUserInput] = useState<string>('');
    
    const fetchDrinks = async(input: string) => {
        
        const drinkFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        const res = drinkFetch.json();
        
        
        return res
                
     }

     

            
    const debouncedFilter = useDebounce(userInput, 500);
    const { data, status, error } = useQuery<Drinks[]>(
        ['drinks', debouncedFilter], 
        async () => {
        const data = await fetchDrinks(debouncedFilter);
       
        return data  
    },
        { enabled: Boolean(debouncedFilter) }
    )


    const memoData = useMemo(() => {
           return data
    }, [data])
      

    return {memoData, status, error, userInput, setUserInput}
}


