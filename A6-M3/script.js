let address; 

// HTTP -> Protocolo de transferencia de hipertexto 
// HTTP -> REQUISIÇÃO -> Url/Método/Corpo(opcional)
// URL -> caminho -> https://viacep.com.br/ws/01001000/json/
// Método -> GET (BUSCAR DADOS) / POST (INSERIR/SALVAR DADOS)/ PUT (EDITAR DADOS) / DELETE (DELETAR DADOS)
// Corpo -> Body -> ex: quero criar um novo usuario -> body: informações para criar um novo usuario (nome, cpf, email)

// fetch -> função nativa do javascript para fazer requisições HTTP
// fetch -> função nativa do javascript para se conectar com uma API

// requisições retornam dados ASSINCRONOS(dados que demoram alguns segundos para chegar)
// .then(callback) -> QUANDO finalizar o pedido e tiver uma resposta faça o que esta dentro dos (callback); 
// .then(res => res.json()) -> quando voce tiver uma resposta da minha requisição PEGUE essa RESPOSTA e transforma a RESPOSTA em um OBJETO JAVASCRIPT {}
function searchCep(cep){
    // newAddress é a variavel que vai receber o resultado da requisição(pesquisa)
   const newAddress = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
        // return data esta inserindo dentro da variavel newAddress o resultado da requisição(pesquisa)/data
        return data
    });
    // return newAddress esta retornando para quem chamar a função searchCep as informações do endereço encontrado
    return newAddress;
}
// console.log nao irá funcionar fora do then 
// porque o console.log é SINCRONO 
// o fetch é ASSINCRONO 

//const numeroApi = fetch('http://apiqueretornaumnumero')
// .then(res => res.json()) {numero: 4}
// console.log(numeroApi) = 4

//const numeroApi = fetch('http://apiqueretornaumnumero')
// .then(res => res.json()) {numero: 4}
// .then(numero => numero*2)
// console.log(numeroApi) = 8

// buscando tags html e guardando dentro de variaveis
const inputCep = document.getElementById('input-cep');
const btnSearch = document.getElementById('btn-search');
const divResult = document.getElementById('result');

// função anonima vinculada a uma variavel
// serve para criar uma tarefa especifica e singular
const createViewResult = (street, neighborhood, region) => {
    divResult.innerHTML = '';
    // criando tags html
    const addressStreet = document.createElement('p');
    const addressNeighborhood = document.createElement('p');
    const addressRegion = document.createElement('p');

    // editando os textos das tags criadas
    addressStreet.innerText = street;
    addressNeighborhood.innerText = neighborhood;
    addressRegion.innerText = region;

    // adicionando as tags criadas em um elemento do html já existente na tela
    divResult.appendChild(addressStreet);
    divResult.appendChild(addressNeighborhood);
    divResult.appendChild(addressRegion);

    // adicionando a tag existente novamente no corpo do site
    document.body.appendChild(divResult);
}

// async -> declarando que algo dentro da função é assincrono
// await -> declarando que o que vem depois deverá ser aguardado o final da sua execuçã
btnSearch.addEventListener('click', async ()=> {
    // chamando searchCep que esta pesquisando na API viacep um CEP
    const result = await searchCep(inputCep.value);

    // criando tags no html para apresentar as informações do CEP encontradas
    createViewResult(result.logradouro, result.bairro, result.regiao);
});