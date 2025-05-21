

class Anime {
    constructor(name, img, power){
        this.name = name;
        this.img = img;
        this.power = power;
    }
}

// armazenando as tags do HTML em variaveis
const inputNameAnime = document.getElementById("input-name"); 
const inputPowerAnime = document.getElementById("input-power"); 
const inputImgAnime = document.getElementById("input-img"); 

const listaAnimes = [];
const ulAnimes = document.getElementById('animesList');
const botaoAdicionar = document.getElementById('btn-add');

botaoAdicionar.addEventListener('click', function () {
  const item = new Anime(inputNameAnime.value,inputImgAnime.value, inputPowerAnime.value);
  listaAnimes.push(item);
  ulAnimes.innerHTML = ''; //apagando a lista atual para recria la com os novos valores
  // {name: 'tenis', price: '$250'}
  listaAnimes.map(({ name, img, power }) => { //pega todos os itens do array e cria um novo array
    createItem(name, img, power);
  })
})

const createItem = (name, img, power) => {
  const liItem = document.createElement('li'); //criando uma tag li
  const textItem = document.createElement('p');
  const imgItem = document.createElement('img');

  textItem.innerText = `O nome do anime é ${name} e seu poder é ${power}`; //adicionar um texto para a tag
  imgItem.src = img;

  liItem.appendChild(textItem);
  liItem.appendChild(imgItem);
  
  ulAnimes.appendChild(liItem); // adicionando a tag à lista
  document.body.appendChild(ulAnimes);
}



