import Produto from "../models/Produto.js";
const botaoUser = document.getElementById('botao-user');
const responseUser = document.getElementById('response-user');

botaoUser.addEventListener('click', ()=>{
  let imgUser = document.getElementById('img-user');
  let parUser = document.getElementById('par-user');
  let textUser = document.getElementById('text-user');


  let cardUser = new Produto(imgUser.value, parUser.value, textUser.value);
  console.log(cardUser)

  let li = document.createElement('li');
  li.setAttribute('id', 'list-cards');
  
  let img = document.createElement('img');
  img.setAttribute('id', 'img-card');
  img.src = cardUser.imagem;

  let paragrafo = document.createElement('p');
  paragrafo.innerText = cardUser.titulo;

  let texto = document.createElement('p');
  texto.innerText = cardUser.paragrafo;

  li.appendChild(img);
  li.appendChild(paragrafo);
  li.appendChild(texto);
  responseUser.appendChild(li);

  document.body.appendChild(responseUser);
})