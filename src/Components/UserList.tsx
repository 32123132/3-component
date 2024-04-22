import { useEffect, useState } from "react"

export function List(){
    const [user,setUser] = useState([])
    
    useEffect(() => {
        
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUser(json))
    
        
    },[])
    



return(
    <div>    
       
        {user.map(item => (<div>{item.name}</div>))}
    </div>
)
}