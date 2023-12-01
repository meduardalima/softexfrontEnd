try {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));

  let resultado = n1 + n2;

  alert(`O resultado da operação é: ${resultado}`);
} catch (excecao) {
  alert(`Ocorreu um erro: ${excecao.message}`);
} finally {
  alert("Fim do programa.");
}
