
// querySelector -> retorna um array
// getElementById -> retorna um objeto
// getElementByTagName -> retorna um array
// getElementByClassName -> retorna um array

// const paragrafos = document.getElementsByTagName('p');

// for (let i = 0; i < paragrafos.length; i++) {
//       paragrafos[i].style.color = 'blue'    
// }

// const primeiroParagrafo = document.getElementById('primeiroParagrafo');
// primeiroParagrafo.style.color = 'purple';

// const variosParagrafos = document.querySelector('#primeiroParagrafo');
// primeiroParagrafo.style.fontSize = '30px';

const listaNomes = [{name: '', preco: 212},{name: '', preco: 1200}];

const ulNomes = document.getElementById('listaDesordenada');

// pensei em criar varios itens quando o usuario quiser
const createItem = (name) => {
   const newName = document.createElement('li');
   newName.innerText = name; 

   newName.classList.add('colorName');
   
   ulNomes.appendChild(newName);
   document.body.appendChild(ulNomes);
}

const inputName = document.getElementById('name');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener("click", ()=> {
    listaNomes.push(inputName.value);
    createItem(inputName.value);
    console.log(listaNomes);
    inputName.value = ''
});


// criar 2 inputs 
// 1 input nome do produto
// 2 input preço do produto
// OBJETO 
// adicionar o novo objeto no array
// apresentar a nova lista na tela