import {useRouter} from 'next/router'
import Link from 'next/link'
import useSearchId from '../../hooks/useSearchId'
import {DrinksModel} from '../../components/drinks/DrinksModel'
import DrinkProfile from '../../components/drinks/DrinkProfile'


const Details = () => {
    const { 
        query: { id }
    } = useRouter();

    const {data} = useSearchId(id);
    
    

    
    
    return (
        <>
        <section className="bg-white bg-drinks-bg bg-cover bg-no-repeat lg:min-h-screen lg:h-auto">
            <div className="flex justify-start flex-col text-center bg-gray-300 bg-opacity-25 max-w-[56rem] w-full my-0 mx-auto min-h-screen">
                  {data?.drinks !== null ?
                  data?.drinks.map((drink: DrinksModel ) => (
                          <DrinkProfile 
                              key={drink.idDrink} 
                              id={drink.idDrink} 
                              strDrink={drink.strDrink}
                              strDrinkThumb={drink.strDrinkThumb}
                              strIngredient1={drink.strIngredient1}
                              strIngredient2={drink.strIngredient2}
                              strIngredient3={drink.strIngredient3}
                              strIngredient4={drink.strIngredient4}
                              strIngredient5={drink.strIngredient5}
                              strIngredient6={drink.strIngredient6}
                              strIngredient7={drink.strIngredient7}
                              strIngredient8={drink.strIngredient8}
                              strIngredient9={drink.strIngredient9}
                              strIngredient10={drink.strIngredient10}
                              strIngredient11={drink.strIngredient11}
                              strIngredient12={drink.strIngredient12}
                              strIngredient13={drink.strIngredient13}
                              strIngredient14={drink.strIngredient14}
                              strIngredient15={drink.strIngredient15}
                              strMeasure1={drink.strMeasure1}
                              strMeasure2={drink.strMeasure2}
                              strMeasure3={drink.strMeasure3}
                              strMeasure4={drink.strMeasure4}
                              strMeasure5={drink.strMeasure5}
                              strMeasure6={drink.strMeasure6}
                              strMeasure7={drink.strMeasure7}
                              strMeasure8={drink.strMeasure8}
                              strMeasure9={drink.strMeasure9}
                              strMeasure10={drink.strMeasure10}
                              strMeasure11={drink.strMeasure11}
                              strMeasure12={drink.strMeasure12}
                              strMeasure13={drink.strMeasure13}
                              strMeasure14={drink.strMeasure14}
                              strMeasure15={drink.strMeasure15}
                              strInstructions={drink.strInstructions}
                          />
                         
                    ))  : []   }

              

                
            </div>
        </section>
      
          
        </>
  )
}

export default Details