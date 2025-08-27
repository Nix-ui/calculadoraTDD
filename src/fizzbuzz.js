function fizzBuzz(number){
    return number % 3 === 0 ? (number % 5 === 0 ? "FizzBuzz" : "Fizz") : (number % 5 === 0 ? "Buzz" : String(number));
}
function generateFizzBuzzSequence(n) {
    return Array.from({ length: n }, (_, i) => fizzBuzz(i + 1)).join(",");
}


export { fizzBuzz , generateFizzBuzzSequence};