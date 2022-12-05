import React, {use, useEffect} from 'react'


interface Props {
  userInputProp: string;
  setUserInputProp: React.Dispatch<React.SetStateAction<string>>;
}


const InputField = ({userInputProp, setUserInputProp} : Props) => {
    const searchDrinks = (searchValue: string) => {
          setUserInputProp(searchValue)
          console.log(`This is user input from input field ${userInputProp}`);
          
    }

return (
    <>
    
    
        
        <input 
          type="text" 
          value={userInputProp}
          onChange={e => {
            searchDrinks(e.target.value)

          }
            
          }
          className="border-solid border-2 border-black"
        />
        
     
    </>
  )
}

export default InputField