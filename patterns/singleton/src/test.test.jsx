import { describe,it,expect } from "vitest";
import counterObj from "../easierOneObjectScenario";

describe("Let's see our better Counter working well", ()=>{
    it("test for increment", ()=>{
        const actual1 = counterObj.increment();
        expect(actual1).toBe(1);
        counterObj.increment();
        counterObj.increment();
        counterObj.increment();
        const actual2 = counterObj.increment();
        expect(actual2).toBe(5);
    }),
    it("test for decrement", ()=>{
        const actual1 = counterObj.decrement();
        expect(actual1).toBe(4);
    })
})