import DrinkList from "../drinks/DrinkList"


const Search = () => {
        
    
    
return(
        <section id="search" className="bg-white bg-drinks-bg bg-cover bg-no-repeat lg:min-h-screen lg:h-auto xs:h-auto xs:pb-5 scroll-smooth overflow-hidden">
            <div  className="flex flex-col items-center pt-5">
                
                <DrinkList />
            </div>

        </section>
        )
}

export default Search