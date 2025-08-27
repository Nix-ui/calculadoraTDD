import {sumar} from "./calculadora";
import {generateFizzBuzzSequence, fizzBuzz} from "./fizzbuzz.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const sequence = document.querySelector("#secuence-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result = sequence.checked ? generateFizzBuzzSequence(Number(first.value)) : fizzBuzz(Number(first.value));
  div.innerHTML = "<p>" + result + "</p>";
});
