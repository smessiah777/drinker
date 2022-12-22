import Image from 'next/image'


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
    
          <div className="flex bg-white border-solid border-2 border-teal-600 rounded-2xl lg:w-full max-w-[37rem] md:w-full xs:w-64  px-3">
                <Image 
                    src="/search-icon.svg"
                    alt="Search"
                    width={24}
                    height={24}
                    className="justify-start"
                />
                <input 
                type="text" 
                value={userInputProp}
                onChange={e => {searchDrinks(e.target.value)}}
                className="bg-white focus:outline-none text-black ml-4 w-11/12 py-1"              
              />
          </div>
        
       
        
     
    </>
  )
}

export default InputField