
import { useSearch } from '../../hooks/useSearch';
import InputField from './InputField';
import DrinkCard from './DrinkCard';


interface IDrink{
 
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;


  }

  


const DrinkList = () =>{
   
    const {status, memoData, error, userInput, setUserInput} = useSearch();
    
    if (status === 'loading') {
        return <span>Loading...</span>
      }
    
    if (status === 'error') {
        return <span>Error: {error.message}</span>
      }

     
      

return (
    <>  
      <InputField userInputProp={userInput} setUserInputProp={setUserInput}/>
  
    <div className="flex justify-center item-center mt-6 m:container px-5 overflow-hidden" >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
       
        
        { memoData?.drinks !== null && status === 'success' ?
            memoData?.drinks.map((drink: IDrink) => (
              <DrinkCard 
              key={drink.idDrink} 
              id={drink.idDrink} 
              cocktailName={drink.strDrink}
              img={drink.strDrinkThumb} 
              ingredient1={drink.strIngredient1} 
              ingredient2={drink.strIngredient2} 
              ingredient3={drink.strIngredient3}/>
          )) : userInput == '' ? "" : <h1> try again</h1>

        
      }
          

      </div>
    </div>
    </>
  )
}

export default DrinkList