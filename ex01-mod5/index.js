const carro = {
  marca: "Toyota",
  modelo: "Camry",
  anoFabricacao: 2020,
  iniciarMotor: function () {
    console.log("O motor do carro foi iniciado.");
  },
  pararMotor: function () {
    console.log("O motor do carro foi parado.");
  },
  acionarAlarme: function () {
    console.log("O alarme do carro foi acionado.");
  },
};

const mesa = {
  material: "Madeira",
  tamanho: { comprimento: 120, largura: 80, altura: 75 },
  cor: "Marrom",
  adicionarObjeto: function (objeto) {
    console.log(`Um objeto foi adicionado à mesa: ${objeto}`);
  },
  limparMesa: function () {
    console.log("A mesa foi limpa.");
  },
  ajustarAltura: function (novaAltura) {
    this.tamanho.altura = novaAltura;
    console.log(`A altura da mesa foi ajustada para ${novaAltura} cm.`);
  },
};

// Objeto Abstrato
const contaBancaria = {
  numeroConta: "12345",
  saldo: 1000,
  nomeTitular: "João",
  depositar: function (valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  },
  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para realizar o saque.");
    }
  },
  verificarSaldo: function () {
    console.log(`Saldo atual: ${this.saldo}`);
  },
};

const redeSocial = {
  nome: "Facebook",
  numeroUsuarios: 2500000000,
  recursosDisponiveis: ["Postagens", "Mensagens", "Fotos"],
  criarPostagem: function (conteudo) {
    console.log(`Nova postagem: ${conteudo}`);
  },
  enviarMensagem: function (destinatario, mensagem) {
    console.log(`Mensagem para ${destinatario}: ${mensagem}`);
  },
  pesquisarAmigos: function (nome) {
    console.log(`Pesquisando por amigos com o nome: ${nome}`);
  },
};

// Exemplos de utilização dos objetos
carro.iniciarMotor();
mesa.adicionarObjeto("Livro");
contaBancaria.depositar(500);
redeSocial.criarPostagem("Olá, mundo!");
