// BOBSBURGUER 

// 1º fase criar uma função que vai CONSUMIR a API
function getAllEpisodes() {
    const allEpisodes = fetch('https://bobsburgers-api.herokuapp.com/episodes')
        .then(res => {
            if (!res.ok) {
                return 'Episodios não encontrados'
            }
            return res.json();
        })
        .then(data => {
            return data
        });
    return allEpisodes;
}


// 2º fase pegar as tags de input, botao e div que vai apresentar o resultado
const btnGetAllEpisodes = document.getElementById('btn-get-all-eps');
const ulResult = document.getElementById('ul-result');


// 3º fase criar função que irá criar as tags no html para apresentar na tela
const createViewResult = (airDate, description, name, totalViews, season) => {
    // criando tags html
    const item = document.createElement('li');
    const episodeName = document.createElement('h2');
    const episodeAirDate = document.createElement('p');
    const episodeDescription = document.createElement('p');
    const episodeTotalViews = document.createElement('p');
    const episodeSeason = document.createElement('p');

    episodeAirDate.classList.add('date');
    episodeTotalViews.classList.add('views');
    item.classList.add('card-item');

    // editando os textos das tags criadas
    episodeName.innerText = name;
    episodeAirDate.innerText = airDate;
    episodeDescription.innerText = description;
    episodeTotalViews.innerText = totalViews;
    episodeSeason.innerText = `Temporada: ${season}`;

    // adicionando as tags criadas em um elemento do html já existente na tela
    
    item.appendChild(episodeName);
    item.appendChild(episodeDescription);
    item.appendChild(episodeAirDate);
    item.appendChild(episodeTotalViews);
    item.appendChild(episodeSeason);
    ulResult.appendChild(item);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(ulResult);
}

// 4º fase adicionar evento ouvinte ao botão
// async diz que a função a frente tem alguma informação que NÃO É SÍNCRONA
btnGetAllEpisodes.addEventListener('click', async () => {
    const result = await getAllEpisodes();

    console.log(result);
    for (let i = 0; i < result.length; i++) {
        createViewResult(result[i].airDate, result[i].description, result[i].name, result[i].totalViewers, result[i].season)
    }
});

