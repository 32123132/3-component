import { useState, useEffect} from "react";
export function Start() {
    const [count,setCount] = useState(10)

     
    
    
    useEffect( ()=>{
        if (count >0){
            var timeout = setTimeout(() => {
                setCount(count-1)
            
        }, 1000);
        
    };
        return () => {
            clearTimeout(timeout)
        }
    })
  
    return(<>

          <h1>{count}</h1>
        </>
    )
}