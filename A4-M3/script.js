
const botaoAdicionar = document.getElementById('btn-add');

const listaProdutos = [];
const ulNomes = document.getElementById('listaDesordenada');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');

class Produto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

botaoAdicionar.addEventListener('click', function () {
  const item = new Produto(inputName.value, inputPrice.value);
  listaProdutos.push(item);
  ulNomes.innerHTML = ''; //apagando a lista atual para recria la com os novos valores
  // {name: 'tenis', price: '$250'}
  listaProdutos.map(({ name, price }) => { //pega todos os itens do array e cria um novo array
    createItem(`${name} R$${price}`);
  })
})

const createItem = (name) => {
  const liItem = document.createElement('li'); //criando uma tag li
  liItem.innerText = name; //adicionar um texto para a tag
  ulNomes.appendChild(liItem); // adicionando a tag à lista
  document.body.appendChild(ulNomes);
}
