import React, { useState, useId, useMemo, useReducer,createContext ,useContext } from "react"
import Boxes from "./components/Boxes/Boxes";
import Box from "./components/Box/Box";

export const BoxContext = createContext<any>(null);  

export default function ShowBoxes() {

    const [name, setName] = useState('');
    const [boxWidth, setBoxWidth] = useState(1);

    function reducer(state:any,action:{type:string,payload?:any}){
        switch (action.type) {
            case "showbox/increment":
                return {...state,num:state.num + 1}        
            default:
                return state;
        }
    }

    function handleClick() {
        dispatch({ type: 'showbox/increment' });
      }

    const [state,dispatch] = useReducer(reducer,{num:0});

    const id = useId();

    const boxes = useMemo(() => [
        { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
        { flex: 3, background: 'hsl(260deg 100% 40%)' },
        { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ], [boxWidth]);

    return (
        <>
            <Boxes boxes={boxes} />
            <section>
                <label htmlFor={`${id}-name`}>
                    Name:
                </label>
                <input
                    id={`${id}-name`}
                    type="text"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label htmlFor={`${id}-box-width`}>
                    First box width:
                </label>
                <input
                    id={`${id}-box-width`}
                    type="range"
                    min={1}
                    max={5}
                    step={0.01}
                    value={boxWidth}
                    onChange={(event) => {
                        setBoxWidth(Number(event.target.value));
                    }}
                />
                <button onClick={handleClick}>increment</button>
                <span>{state.num}</span>
            </section>
            <BoxContext.Provider value={{title:"this is from BoxContext"}}>
            <Box />
            <Box />
            </BoxContext.Provider>
        </>
    )
}