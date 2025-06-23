class Pessoa{
  // atributos, métodos
  constructor(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura
  }
  seApresentar(){
    console.log(`Olá meu nome é: ${this.nome}`)
  }
}

const pessoa1 = new Pessoa("Tábata", 28, "1.56cm");
const pessoa2 = new Pessoa("Davi", 16, "1.71cm");


console.log(pessoa1)
console.log(pessoa2)

class SuperHeroi extends Pessoa{
  constructor(nome, idade, altura, superPoder){
    super(nome, idade, altura);
    this.superPoder = superPoder;
  }
  apresentacao(){
    super.seApresentar()
    console.log(`E meu super poder é: ${this.superPoder}`)
  }
}

const homemAranha = new SuperHeroi("Davi", 16, "1.71cm", "Reflexos rápidos");
console.log(homemAranha)
homemAranha.apresentacao()