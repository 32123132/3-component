import { startTransition, useEffect, useState } from "react";

export function Window(){
    const [width,setWidth] = useState(null)
    useEffect(()=>{
        function check(){
            startTransition(()=>{setWidth(window.innerWidth)})
        }
    check()
    window.addEventListener("resize",check)
    return () => window.removeEventListener("resize",check)
    },[])
    return(
        <>
            <span>{width}</span>
        </>
    )
}