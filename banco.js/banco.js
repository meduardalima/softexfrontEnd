let Banco = {
  numConta: 123,
  tipoConta: "corrente",
  agencia: "caixa",
  saque: 100,
  deposito: 200,
  saldo: 100,
  saldofinal: function () {
    return "saldo = " + (this.saldo + this.deposito - this.saque);
  },
  mostrarconta: function () {
    return (
      "conta (" +
      this.numConta +
      "), agência (" +
      this.agencia +
      "), deposito (" +
      this.deposito +
      "), saque (" +
      this.saque +
      ")"
    );
  },
};
console.log(Banco.saldofinal());
/**console.log(
  `o valor atual do saldo após o deposito de ${Banco.deposito} e saque de ${Banco.saque} é ${Banco.saldo}`
);*/
console.log(Banco.mostrarconta());
