import { useEffect, useState } from "react"
import { Print } from "./print"
export function List(){
    const [user,setUser] = useState(null)
    
    useEffect(() => {
        
        const response  = fetch ('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
        setUser(response)
        
    },[])
    

    

return(
    <>    
        {user && <p>{user}</p>}   
    </>
)
}