// Personagem

function getAllCharacter() {
    const allCharacter = fetch(`https://bobsburgers-api.herokuapp.com/characters`)
        .then(res => {
            if (!res.ok) {
                return 'Personagens não encontrados'
            }
            return res.json();
        })
        .then(data => {
            return data;
        });
    return allCharacter;
}

const btnGetAllChars = document.getElementById('btn-get-all-chars');
const ulResult = document.getElementById('ul-result');

const createViewResult = (name, img, gender, age) => {
    // criando tags html
    const item = document.createElement('li');
    const charImage = document.createElement('img');
    const charName = document.createElement('p');
    const charGender = document.createElement('p');
    const charAge = document.createElement('p');

    // editando o src da tag de imagem criada
    charName.innerText = name;
    charGender.innerText = gender;
    charAge.innerText = age;
    charImage.src = img;
    
    // adicionando as tags criadas em um elemento do html já existente na tela
    item.appendChild(charImage);
    item.appendChild(charName);
    item.appendChild(charGender);
    item.appendChild(charAge);
    ulResult.appendChild(item);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(ulResult);
}

btnGetAllChars.addEventListener('click', async () => {
    // array de Personagens
    const result = await getAllCharacter();

    console.log("result: ",result);

    ulResult.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        if(i >=10){
           break; 
        }
        createViewResult(result[i].name,result[i].image,result[i].gender,result[i].hair);
        // if(i >=9){
        //     break;
        // }
    }
});

// se o i = 9 pare de executar -> apresentar 10 personagens contando do 0-9 PRIMEIRO CRIAR CARD, DEPOIS VERIFICA A NUMERAÇÃO
// sem i = 10 pare de executar -> apresentar 10 personagens contando do 0-9 PRIMEIRO VERIFICA A NUMERAÇÃO E DEPOIS CRIA

// o que queremos é limitar a quantidade de personagens apresentados na tela

