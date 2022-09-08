import {useState,useMemo} from "react"
import { useTime } from "./myHooks";
import format from 'date-fns/format' 

export default function PrimeNumberCalculator() {
    const [selectedNum, setSelectedNum] = useState(100);
    const time = useTime();

    const isPrime = (num: number) => {
        const max = Math.ceil(Math.sqrt(num));
        if (num === 2) return true;
        for (let counter = 2; counter <= max; counter++) {
            if (num % counter === 0) return false;
        }
        return true;
    }

    const allPrimes = useMemo(()=>{
        const result: number[] = [];
        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) result.push(counter)
        };
        return result;
    },[selectedNum]);

    return (
        <>
            <p>
                {format(time,'hh:mm:ss a')}
            </p>
            <form>
                <label htmlFor="num">Your number is:</label>
                <input type="number" value={selectedNum}
                    onChange={e => {
                        let num = Math.min(100_000, Number(e.target.value));
                        setSelectedNum(num);
                    }}
                />
            </form>
            <p>
                There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
                {' '}
                <span className="prime-list">
                    {allPrimes.join(', ')}
                </span>
            </p>
        </>
    )

}