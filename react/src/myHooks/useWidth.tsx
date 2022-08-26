import { useState,useEffect } from "react"

export default function useWidth() {

    const [scrWidth, setScrWidth] = useState(window.innerWidth);

    const onResize = () => { 
        setScrWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',onResize)
        return (()=>{window.removeEventListener('resize',onResize)})
    }, [])
    
    return scrWidth

}