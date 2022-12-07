import DrinkList from "../drinks/DrinkList"

const Search = () => {
        
    
    
return(
        <section id="search" className="bg-white bg-drinks-bg bg-cover bg-no-repeat lg:h-screen xs:h-auto xs:pb-5">
            <div  className="flex flex-col items-center pt-5">
                <DrinkList />
            </div>

        </section>
        )
}

export default Search