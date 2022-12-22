import { useQuery } from "react-query";
import { DrinksModel } from "../components/drinks/DrinksModel";



 const useSearchId = (id: string) => {

    const fetchDrinksById = async(id: string) => {
        if(id == null) return
        const drinkByIdFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const res = drinkByIdFetch.json()
        return res
    }

    const {data, status, error} = useQuery<DrinksModel[]>(['drinkById', id], async() => await fetchDrinksById(id))

   
   

    return{data,status,error}


}


export default useSearchId