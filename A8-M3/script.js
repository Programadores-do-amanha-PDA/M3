// POKEMON

// 1º fase criar uma função que vai CONSUMIR a API
function pokebola(pokemonName) {
    // procurando informação na api do pokemon
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    // // procurando informação na api de ceps 
    // const newAddress = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // // procurando infomação na api de filmes
    // const filme = fetch(`https://filme.com.br/ws/${nomeFilme}`)
        .then(res => {
            if (!res.ok) {
                return 'Pokemon não encontrado'
            }
            return res.json();
        })
        .then(data => {
            return data
        });
    return pokemon;
}

// function outraApi(outroParametro){
//    const algumRetorno = fetch(`https://outraURL/${outroParametro}`)
//     .then(res => res.json())
//     .then(data => {
//         return data
//     });
//     return algumRetorno;
// }

// 2º fase pegar as tags de input, botao e div que vai apresentar o resultado
const inputPokemonName = document.getElementById('input-pokemon-name');
const btnSearchPokemon = document.getElementById('btn-buscar-pokemon');
const divResult = document.getElementById('div-result');

// 3º fase criar função que irá criar as tags no html para apresentar na tela
const createViewResult = (name, img) => {
    divResult.innerHTML = '';
    // criando tags html
    const pokemonName = document.createElement('p');
    const pokemonImg = document.createElement('img');

    // editando os textos das tags criadas
    pokemonName.innerText = name;
    pokemonImg.src = img;

    // adicionando as tags criadas em um elemento do html já existente na tela
    divResult.appendChild(pokemonImg);
    divResult.appendChild(pokemonName);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(divResult);
}

// 4º fase adicionar evento ouvinte ao botão
btnSearchPokemon.addEventListener('click', async () => {
    const result = await pokebola(inputPokemonName.value);

    console.log(result);
    // typeof é um recurso do js para saber o tipo(string, boolean, number) da variavel a frente
    if (typeof result === 'string') {
        alert(result);
    } else {
        createViewResult(result.name, result.sprites.front_default);
    }
});