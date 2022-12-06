import Link from 'next/link'


interface Props {
    id: string;
    cocktailName: string;
    img: string;
    ingredient1: string;
    ingredient2: string;
    ingredient3: string;
}

const DrinkCard = ({id, cocktailName, img, ingredient1, ingredient2, ingredient3}: Props) => {
  return (
    <>
    
    
        <div className="card lg:card-side bg-base-100 shadow-xl xs:max-w-[13rem] md:max-w-xs  lg:max-h-48">
            <figure ><img className=""  src={img} alt={cocktailName}/></figure>
                <div className="card-body">
                    <h2 className="card-title xs:justify-center xs:text-center">{cocktailName}</h2>
                
                        <p className="xs:text-center lg:text-left">{ingredient1}</p>
                        
                    
                        
                
                    <div className="card-actions justify-center">
                        <Link href={`drink/${id}`}>
                            <button className="btn btn-primary">See More</button>
                        </Link>  
                    </div>
                </div>
            </div> 
    </>
  )
}

export default DrinkCard