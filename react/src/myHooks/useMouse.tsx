import { useEffect,useState } from "react"

export default function useMouse (){

    const [ x , setX ] = useState(0) 

    const [ y , setY ] = useState(0) 

    const onMove = (e:MouseEvent) => {
        setX(e.x);
        setY(e.y);
    }

    useEffect(()=>{
        document.documentElement.addEventListener('mousemove',onMove);
        return (()=>{
            document.documentElement,removeEventListener('mousemove',onMove)
        })
    },[])

    return {x,y}

}