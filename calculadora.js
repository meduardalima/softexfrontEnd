let num1 = parseInt(prompt("digite o primeiro número: "));
let num2 = parseInt(prompt("digite o segundo número: "));
let operador = prompt("escolha um dos operadores (+, -, *, /): ");
if (operador == "+") {
  soma = num1 + num2;

  console.log(`${num1} + ${num2} = ${soma}`);
} else if (operador == "-") {
  subtração = num1 - num2;
  console.log(`${num1} - ${num2} = ${subtração}`);
} else if (operador == "/") {
  divisão = num1 / num2;
  console.log(`${num1} / ${num2} = ${divisão}`);
} else if (operador == "*") {
  multiplicação = num1 * num2;
  console.log(`${num1} * ${num2} = ${multiplicação}`);
}
