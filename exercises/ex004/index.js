let num = 10;

function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++){
    result = i;
  }
  return result;
}
const factorial = factorialCalculator(num)
const resultmsg = `factorial of ${num} is ${factorial}`
