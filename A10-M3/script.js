// HARRY POTTER

function getAllPersons(house) {
    const allPersons = fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then(res => {
            if (!res.ok) {
                return 'Personagens não encontrados'
            }
            return res.json();
        })
        .then(data => {
            return data
        });
    return allPersons;
}

const btnGetAllPerson = document.getElementById('btn-get-all-person');
const ulResult = document.getElementById('ul-result');
const selected = document.getElementById('select-house');

const createViewResult = (name, house, ancestry, image) => {
    // criando tags html
    const item = document.createElement('li');
    const personName = document.createElement('h2');
    const personHouse = document.createElement('p');
    const personAncestry = document.createElement('p');
    const personImage = document.createElement('img');

    // adicionando classe de estilização as tags
    personHouse.classList.add('date');
    personImage.classList.add('views');
    item.classList.add('card-item');

    // editando os textos das tags criadas
    personName.innerText = name;
    personHouse.innerText = house;
    personAncestry.innerText = ancestry;
    personImage.src = image;

    // adicionando as tags criadas em um elemento do html já existente na tela
    item.appendChild(personName);
    item.appendChild(personAncestry);
    item.appendChild(personHouse);
    item.appendChild(personImage);
    ulResult.appendChild(item);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(ulResult);
}

btnGetAllPerson.addEventListener('click', async () => {
    // array de personagens
    const result = await getAllPersons(selected.value);

    ulResult.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        createViewResult(result[i].name, result[i].house, result[i].ancestry, result[i].image)
    }
});
