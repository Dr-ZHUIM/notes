import {ToastContainer,toast} from "react-toastify"
import observable  from "./observer";
import useToggle from "../useToggle";
import "./index.css";

export default function ObserverDom() {

    const [toggle,changeToggle] = useToggle(false);

    function logger(data){
        console.log(`Date: ${Date.now()} data:${data}`);
    }

    function toastify(data){
        toast(data)
    }

    observable.subscribe(logger);
    observable.subscribe(toastify);

    function handleClick(){
        observable.notify("User clicked button!");
    }

    function handleToggle(){
        observable.notify("User toggled the switch!");
        changeToggle();
    }

    return (
        <div>
            <button  onClick={handleClick}>Click me!</button>
            <div onClick={handleToggle} className={toggle?"untoggled":"toggled"}></div>
            <ToastContainer />
        </div>
    )
}