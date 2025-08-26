import {  sumar, multiplicar, dividir} from "./calculadora.js";

describe("Calculadora", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
  it("deberia multiplicar dos numeros cualquiera",()=>{
    expect(multiplicar(4,5)).toEqual(20);
  });
  it("deberia dividir dos numeros",()=>{
    expect(dividir(20,5)).toEqual(4);
  });
});


