// GATO

function getAllCat() {
    const allCats = fetch(`https://api.thecatapi.com/v1/images/search?limit=50`)
        .then(res => {
            if (!res.ok) {
                return 'Gatos não encontrados'
            }
            return res.json();
        })
        .then(data => {
            return data
        });
    return allCats;
}

const btnGetAllCats = document.getElementById('btn-get-all-cats');
const ulResult = document.getElementById('ul-result');

const createViewResult = (url) => {
    // criando tags html
    const item = document.createElement('li');
    const catImage = document.createElement('img');

    // adicionando estilização da tag de imagem
    catImage.style.height = '250px';
    catImage.style.width = '250px';
    catImage.style.listStyle = 'none';

    // editando o src da tag de imagem criada
    catImage.src = url;
   
    // adicionando as tags criadas em um elemento do html já existente na tela
    item.appendChild(catImage);
    ulResult.appendChild(item);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(ulResult);
}

btnGetAllCats.addEventListener('click', async () => {
    // array de Cats
    const result = await getAllCat();

    ulResult.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
        createViewResult(result[i].url);
    }
});

// API DE GATOS 
// ARRAY -> OBJETOS -> PROPRIEDADES

// API DE CACHORRO
// ARRAY -> STRINGS