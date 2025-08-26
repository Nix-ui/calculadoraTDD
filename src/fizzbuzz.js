function fizzBuzz(number){
    if(number ===5) return "Buzz";
    return  number % 3 === 0 ? "Fizz" : String(number);
}

export { fizzBuzz };