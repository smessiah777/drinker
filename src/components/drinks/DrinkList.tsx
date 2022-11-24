import React from 'react'
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

interface IDrinkProps {
  drinksData: IDrinks;
}

const DrinkList = (props: IDrinkProps) =>{
  const {drinksData} = props
  const {drinks,idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3} = drinksData

  return (
    <>
        <div className="flex justify-center item-center mt-6">
      <div className="m:container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {
        
          drinksData.drinks ? 
        
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