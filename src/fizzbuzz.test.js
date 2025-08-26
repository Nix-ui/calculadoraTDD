import { fizzBuzz } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("deberia devolver el numero si no es multiplo de 3 o 5 ",()=>{
        expect(fizzBuzz(1)).toEqual("1");
    });
    it("deberia devolver un numero cualquiera si no es multiplo de 3 o 5",()=>{
        expect(fizzBuzz(2)).toEqual("2");
    });
});