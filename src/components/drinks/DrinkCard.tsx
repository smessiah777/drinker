import Link from 'next/link'




interface Props {
    id: string;
    cocktailName: string;
    img: string;
    ingredient1: string;
    ingredient2: string;
    ingredient3: string;
}

const DrinkCard = ({id, cocktailName, img}: Props) => {
  return (
    <>
    
    
        <div className="card lg:card-side bg-teal-600 shadow-xl xs:max-w-[13rem] md:max-w-lg  lg:max-h-48">
            <figure ><img className="h-full"  src={img} alt={cocktailName}/></figure>
                <div className="flex flex-col flex-1 justify-center items-center p-8">
                    <h2 className="card-title text-white xs:justify-center xs:text-center pb-2">{cocktailName}</h2>
                
                    <div className="card-actions justify-center content-end">
                        <Link href={`drink/${id}`}>
                            <button 
                                className="btn btn-primary text-sm bg-black border-black
                                hover:bg-white hover:border-white hover:text-teal-600">
                                    More
                            </button>
                        </Link>  
                
                    </div>
                </div>
            </div> 
    </>
  )
}

export default DrinkCard