class Cliente {
  #saldo
  // por padrão as propriedades da classe são publicas, mas também podemos criar as propriedades privadas
  constructor(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.#saldo = saldo;
  }

  //getters e setters são métodos para acessar as propriedades que são privadas
  get saldo() {
    return this.#saldo;
  }

  set saldo(value) {
    this.#saldo = value
  }
}


const clienteId1 = new Cliente("Tábata", "46121610840", "R$100000,00");
clienteId1.saldo = "R$ 25,00"

console.log(clienteId1);