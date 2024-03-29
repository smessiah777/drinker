import { useSearch } from '../../hooks/useSearch';
import InputField from './InputField';
import DrinkCard from './DrinkCard';


const DrinkList = () =>{
   
    const {status, memoData, error, userInput, setUserInput} = useSearch();
    
    if (status === 'error') {
        console.log(error);
        
      }

return (
    <>  
       
    <InputField userInputProp={userInput} setUserInputProp={setUserInput}/>
  
    <div className="flex justify-center item-center mt-6 m:container px-5 overflow-hidden" >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {memoData?.drinks !== null || undefined && status === 'success' ?
            memoData?.drinks.map((drink: any) => (
              
                <DrinkCard 
                key={drink.idDrink} 
                id={drink.idDrink} 
                cocktailName={drink.strDrink}
                img={drink.strDrinkThumb} 
                />
            )) : userInput == '' ? "" : <h1> try again</h1>}
        </div>
    </div>
    </>
  )
}

export default DrinkList