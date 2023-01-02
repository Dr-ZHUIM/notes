import { useState, useEffect } from "react";
export default function useDogFetch() {

    const [dogs, setDogs] = useState(null);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
        .then(res => res.json())
        .then(({message}) => setDogs({dogs:message}))
    },[])

    return dogs

}