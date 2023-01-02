import { useState, useCallback } from "react";

export default function useToggle(initialState){
    const [toggle,setToggle] = useState(initialState);
    const handleToggle = useCallback(()=>{
        setToggle(v => !v);
    },[]);
    return [toggle,handleToggle];
}