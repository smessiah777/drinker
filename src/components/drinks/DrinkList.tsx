import {useState, useEffect} from 'react'
import { useSearch } from '../../hooks/useSearch';
import DrinkCard from './DrinkCard'


interface IDrinks{
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  drinks:any[];
}



const DrinkList = () =>{
  const {data, isLoading} = useSearch()
  const [drinksData, setDrinksData] = useState<IDrinks[]>([]);

  if(data){
   return setDrinksData(data)
  } 
  isLoading
  
  return (
    <>
        <div className="flex justify-center item-center mt-6">
      <div className="m:container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {
        
          drinksData ? 
        
        drinksData.drinks.map(drink => (
            <DrinkCard 
            key={drink.idDrink} 
            id={drink.idDrink} 
            cocktailName={drink.strDrink}
            img={drink.strDrinkThumb} 
            ingredient1={drink.strIngredient1} 
            ingredient2={drink.strIngredient2} 
            ingredient3={drink.strIngredient3}/>
        )) : null
      }
          

      </div>

    </div>
    </>
  )
}

export default DrinkList