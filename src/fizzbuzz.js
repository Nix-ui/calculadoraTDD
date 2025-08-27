function fizzBuzz(number){
    let resultado = "";
    if(number % 5 === 0) return resultado +="Buzz";
    return  number % 3 === 0 ? "Fizz" : String(number);
}

export { fizzBuzz };