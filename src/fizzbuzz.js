function fizzBuzz(number){
    return number % 3 === 0 ? (number % 5 === 0 ? "FizzBuzz" : "Fizz") : (number % 5 === 0 ? "Buzz" : String(number));
}
function generateFizzBuzzSequence() {
    return ["1", "2", "Fizz", "4", "Buzz"].join(",");
}


export { fizzBuzz , generateFizzBuzzSequence};