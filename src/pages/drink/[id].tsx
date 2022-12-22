import {useRouter} from 'next/router'
import Link from 'next/link'
import useSearchId from '../../hooks/useSearchId'
import { ReactQueryDevtools } from 'react-query/devtools'
import {DrinksModel} from '../../components/drinks/DrinksModel'


const Details = () => {
    const { 
        query: { id }
    } = useRouter();

    const {data, status, error} = useSearchId(id);
    
    

    
    
    return (
        <>
        <ReactQueryDevtools initialIsOpen={false}/>
        <section className="bg-white bg-drinks-bg bg-cover bg-no-repeat lg:min-h-screen lg:h-auto">
            <div className="flex justify-start flex-col text-center bg-gray-300 bg-opacity-25 max-w-[56rem] w-full my-0 mx-auto min-h-screen">
                  {data?.drinks !== null ?
                  data?.drinks.map((drink: DrinksModel ) => (
                          
                          <div className="pt-6 mx-8 text-stone-900">
                              <Link href="/#search">
                                <div className="flex justify-end font-montserrat font-extrabold text-teal-600 text-3xl">
                                    X
                                </div>
                              </Link>
                                 
                                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="xs:w-64 md:w-96 max-w-md  my-0 mx-auto pt-4"/>
                                
                                <h1 className="text-3xl text-center uppercase py-5 font-montserrat text-lg tracking-wide font-medium">
                                {drink.strDrink}
                                </h1>

                               <div className="flex flex-row justify-center pb-5 text-lg">
                                  <div>
                                      <ul className="text-left">
                                        <li>{drink.strIngredient1}</li>
                                        <li>{drink.strIngredient2}</li>
                                        <li>{drink.strIngredient3}</li>
                                        <li>{drink.strIngredient4}</li>
                                        <li>{drink.strIngredient5}</li>
                                        <li>{drink.strIngredient6}</li>
                                        <li>{drink.strIngredient7}</li>
                                        <li>{drink.strIngredient8}</li>
                                        <li>{drink.strIngredient9}</li>
                                        <li>{drink.strIngredient10}</li>
                                        <li>{drink.strIngredient11}</li>
                                        <li>{drink.strIngredient12}</li>
                                        <li>{drink.strIngredient13}</li>
                                        <li>{drink.strIngredient14}</li>
                                        <li>{drink.strIngredient15}</li>
                                        
                                      </ul>
                                  </div>
                                  <div className="w-10"></div>
                                  <div>
                                      <ul className="text-left">
                                        <li>{drink.strMeasure1}</li>
                                        <li>{drink.strMeasure2}</li>
                                        <li>{drink.strMeasure3}</li>
                                        <li>{drink.strMeasure3}</li>
                                        <li>{drink.strMeasure4}</li>
                                        <li>{drink.strMeasure5}</li>
                                        <li>{drink.strMeasure6}</li>
                                        <li>{drink.strMeasure7}</li>
                                        <li>{drink.strMeasure8}</li>
                                        <li>{drink.strMeasure9}</li>
                                        <li>{drink.strMeasure10}</li>
                                        <li>{drink.strMeasure11}</li>
                                        <li>{drink.strMeasure12}</li>
                                        <li>{drink.strMeasure13}</li>
                                        <li>{drink.strMeasure14}</li>
                                        <li>{drink.strMeasure15}</li>
                                      </ul>
                                  </div>
                               </div>

                                <p className="mx-8 px-8 text-base">
                                    {drink.strInstructions}
                                </p>
                          </div>
                    ))  : []   }

              

                
            </div>
        </section>
      
          
        </>
  )
}

export default Details