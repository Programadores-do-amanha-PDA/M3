// // 'http://localhost:4000/ditto'
// // return {name: '', sprites: []}

// // 'http://localhost:4000/all'
// // return [{name: '', sprites: []},{name: '', sprites: []},{name: '', sprites: []},{name: '', sprites: []}]

// // Personagem

// function getAllCharacter() {
//     const allCharacter = fetch(`https://bobsburgers-api.herokuapp.com/characters`)
//         .then(res => {
//             if (!res.ok) {
//                 return 'Personagens não encontrados'
//             }
//             return res.json();
//         })
//         .then(data => {
//             return data;
//         });
//     return allCharacter;
// }

// const btnGetAllChars = document.getElementById('btn-get-all-chars');
// const inputLimit = document.getElementById('input-limit');
// const ulResult = document.getElementById('ul-result');

// const createViewResult = (name, img, gender, age) => {
//     // criando tags html
//     const item = document.createElement('li');
//     const charImage = document.createElement('img');
//     const charName = document.createElement('p');
//     const charGender = document.createElement('p');
//     const charAge = document.createElement('p');

//     // editando o src da tag de imagem criada
//     charName.innerText = name;
//     charGender.innerText = gender;
//     charAge.innerText = age;
//     charImage.src = img;
    
//     // adicionando as tags criadas em um elemento do html já existente na tela
//     item.appendChild(charImage);
//     item.appendChild(charName);
//     item.appendChild(charGender);
//     item.appendChild(charAge);
//     ulResult.appendChild(item);

//     // adicionando a tag existente novamente no corpo do site
//     document.body.appendChild(ulResult);
// }

// btnGetAllChars.addEventListener('click', async () => {
//     // array de Personagens
//     const result = await getAllCharacter();

//     console.log("result: ",result);

//     ulResult.innerHTML = '';

//     // MAP é o método de array que CRIA UM NOVO ARRAY baseado nas condições
//     const novoArrayPersonagens = result.map((personagem)=> personagem.name.toUpperCase());
//     console.log(novoArrayPersonagens);

//     // FILTER é o método de array que filtra apenas os dados que queremos
//     const personagensFemininos = result.filter((personagem) => personagem.gender === "Female");

//     console.log(personagensFemininos);

//     // FIND é o método de array que busca 1 o primeiro de acordo com uma condição
//     const personagensHairBlonde = result.find((personagem) => personagem.email === "Black");

//     console.log(personagensHairBlonde);
//     for (let i = 0; i < personagensFemininos.length; i++) {
//         createViewResult(personagensFemininos[i].name,personagensFemininos[i].image,personagensFemininos[i].gender,personagensFemininos[i].hair);
//     }
// });

// // map/ filter/ find
// // FILTER é o método de array que filtra apenas os dados que queremos
// // filter retira os valores que não passam na condição
// const numeros = [1,2,3,4];
// console.log("antes: ", numeros);
// // quero um NOVO array somente com os numeros pares
// // numeros.map(function () {});
// const numerosFiltrados = numeros.filter((numero)=> numero % 2 === 0);
// console.log("depois: ", numerosFiltrados)
// antes:  (4) [1, 2, 3, 4]
// depois:  (2) [2, 4]

// MAP é o método de array que CRIA UM NOVO ARRAY baseado nas condições
// const numeros = [1,2,3,4];
// console.log("antes: ", numeros);
// // quero um NOVO array somente com os numeros pares
// // numeros.map(function () {});
// const numerosFiltrados = numeros.map((numero)=> numero * 2);
// console.log("depois: ", numerosFiltrados)
              

// PARA O MÓDULO 4 IR PRA FRENTE 
// Métodos de array (FILTER/FIND/MAP)
// Laços de repetição (FOR)
// Funções anonimas (CALLBACK/ARROW FUNCTION)



const produtos = [
    {name: 'batata', price: 3.00},
    {name: 'manga', price: 14.00},
    {name: 'tomate', price: 1.50},
    {name: 'coca-cola', price: 11.00},
]

// filter vai filtrar apenas as informações que queremos 
// FILTER é um método de visualização SELETIVA 

// QUERO OS PRODUTOS ACIMA DE 10 REAIS
const produtosCaros = produtos.filter((produto) => produto.price > 10)
console.log(produtosCaros);
console.log(produtos);

// FIND é o método que faz uma busca unica e especifica
const infosProduto = produtos.find((produto) => produto.name === 'coca-cola');
console.log(infosProduto)

// MAP é um método de alteração de valores
const novosValores = produtos.map((produto) => (produto.name === 'coca-cola') ? produto.price * 10: produto.price * 1);
console.log(novosValores);

