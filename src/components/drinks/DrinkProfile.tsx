import React from 'react'
import Link from 'next/link'



interface Props {
    id: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strInstructions: string;
}


const DrinkProfile = (props: Props) => {
  return (
            <>
                 <div className="pt-6 mx-8 text-stone-900">
                              <Link href="/#search">
                                <div className="flex justify-end font-montserrat font-extrabold text-teal-600 text-3xl">
                                    X
                                </div>
                              </Link>
                                 
                                <img src={props.strDrinkThumb} alt={props.strDrink} className="xs:w-64 md:w-96 max-w-md  my-0 mx-auto pt-4"/>
                                
                                <h1 className="text-3xl text-center uppercase py-5 font-montserrat text-lg tracking-wide font-medium">
                                {props.strDrink}
                                </h1>

                               <div className="flex flex-row justify-center pb-5 text-lg">
                                  <div>
                                      <ul className="text-left">
                                        <li>{props.strIngredient1}</li>
                                        <li>{props.strIngredient2}</li>
                                        <li>{props.strIngredient3}</li>
                                        <li>{props.strIngredient4}</li>
                                        <li>{props.strIngredient5}</li>
                                        <li>{props.strIngredient6}</li>
                                        <li>{props.strIngredient7}</li>
                                        <li>{props.strIngredient8}</li>
                                        <li>{props.strIngredient9}</li>
                                        <li>{props.strIngredient10}</li>
                                        <li>{props.strIngredient11}</li>
                                        <li>{props.strIngredient12}</li>
                                        <li>{props.strIngredient13}</li>
                                        <li>{props.strIngredient14}</li>
                                        <li>{props.strIngredient15}</li>
                                        
                                      </ul>
                                  </div>
                                  <div className="w-10"></div>
                                  <div>
                                      <ul className="text-left">
                                        <li>{props.strMeasure1}</li>
                                        <li>{props.strMeasure2}</li>
                                        <li>{props.strMeasure3}</li>
                                        <li>{props.strMeasure3}</li>
                                        <li>{props.strMeasure4}</li>
                                        <li>{props.strMeasure5}</li>
                                        <li>{props.strMeasure6}</li>
                                        <li>{props.strMeasure7}</li>
                                        <li>{props.strMeasure8}</li>
                                        <li>{props.strMeasure9}</li>
                                        <li>{props.strMeasure10}</li>
                                        <li>{props.strMeasure11}</li>
                                        <li>{props.strMeasure12}</li>
                                        <li>{props.strMeasure13}</li>
                                        <li>{props.strMeasure14}</li>
                                        <li>{props.strMeasure15}</li>
                                      </ul>props.
                                  </div>
                               </div>

                                <p className="mx-8 px-8 text-base">
                                    {props.strInstructions}
                                </p>
                          </div>
            </>
  )
}

export default DrinkProfile