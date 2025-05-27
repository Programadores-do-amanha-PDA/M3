
export const somar = (a,b) => a + b;
class Anime {
    constructor(name, img, power){
        this.name = name;
        this.img = img;
        this.power = power;
    }
}

export const listProducts = [{nome: "bala", price: 30}, {nome: "bolo", price: 12}]

// // armazenando as tags do HTML em variaveis
// const inputNameAnime = document.getElementById("input-name"); 
// const inputPowerAnime = document.getElementById("input-power"); 
// const inputImgAnime = document.getElementById("input-img"); 

// const listaLivros = [];
// const ulAnimes = document.getElementById('animesList');
// const botaoAdicionar = document.getElementById('btn-add');

// // const preview = document.getElementById('imagePreview');

// // document.getElementById('imageSelect').addEventListener('change', function() {
// //         // this - meu 
// //     const selectedImage = this.value;

// //     if (selectedImage) {
// //         preview.src = selectedImage;
// //     } else {
// //         preview.src = '';
// //     }
// // });

// botaoAdicionar.addEventListener('click', function () {
//   const item = new Anime(inputNameAnime.value,preview.src, inputPowerAnime.value);
//   listaLivros.push(item);
//   ulAnimes.innerHTML = ''; //apagando a lista atual para recria la com os novos valores
//   // {name: 'tenis', price: '$250'}
//   listaLivros.map(({ name, img, power }) => { //pega todos os itens do array e cria um novo array
//     createItem(name, img, power);
//   })
// })

// const frutas = ['maça', 'banana', 'maracuja'];
// const novasFrutas = frutas.map(fruta => `transformei ${fruta} em suco`);
// console.log(novasFrutas);

// frutas.filter(fruta => {
//    if(fruta === 'banana'){
//       console.log(`transformei ${fruta} em suco`)
//    }
// })

// const createItem = (name, img, power) => {
//   const liItem = document.createElement('li'); //criando uma tag li
//   const textItem = document.createElement('p');
//   const imgItem = document.createElement('img');

//   textItem.innerText = `O nome do anime é ${name} e seu poder é ${power}`; //adicionar um texto para a tag
//   imgItem.src = img;

//   liItem.appendChild(textItem);
//   liItem.appendChild(imgItem);
  
//   ulAnimes.appendChild(liItem); // adicionando a tag à lista
//   document.body.appendChild(ulAnimes);
// }



