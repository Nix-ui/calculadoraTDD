import { fizzBuzz, generateFizzBuzzSequence } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("deberia devolver el numero si no es multiplo de 3 o 5 ",()=>{
        expect(fizzBuzz(1)).toEqual("1");
    });
    it("deberia devolver un numero cualquiera si no es multiplo de 3 o 5",()=>{
        expect(fizzBuzz(2)).toEqual("2");
    });
    it("deberia devolver Fizz cuando el numero es 3",()=>{
        expect(fizzBuzz(3)).toEqual("Fizz");
    });
    it("deberia devolver Fizz cuando el numero es multiplo de 3",()=>{
        expect(fizzBuzz(9)).toEqual("Fizz");
    });
    it("deberia convertir el 5 a Buzz",()=>{
        expect(fizzBuzz(5)).toEqual("Buzz");
    });
    it("deberia convertir un multiplo de 5 a Buzz",()=>{
        expect(fizzBuzz(20)).toEqual("Buzz");
    });
    it("deberia convertir el 15 a FizzBuzz",()=>{
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("deberia convertir cualquier multiplo de 3 y 5 a FizzBuzz",()=>{
        expect(fizzBuzz(30)).toEqual("FizzBuzz");
    });
    it("deberia devolver una cadena con los primeros 5 numeros convertidos con FizzBuzz",()=>{
        expect(generateFizzBuzzSequence(5)).toEqual("1,2,Fizz,4,Buzz");
    });
});