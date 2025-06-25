
// HOINTING -> Colocar a declaração de variaveis e funções antes da sua chamada
const subtrair = (a,b) => {
    console.log(a-b);
}
const nome = 'Beatriz';

subtrair(3,2);
console.log("meu nome é: ",nome);
 
// UNHOISTED -> Funções que não precisam de elevação para funcionar
somar(2,3);
dividir(6,3);
function dividir(a,b){
    console.log(a/b);
}

function somar(a,b){
    console.log(a+ b);
}

HOINTING - move as funçoes e variaveis para o topo da estrutura, ou seja chamando elas depois da declaração
UNHOISTED - nao move para o topo as funções e variaveis, só pode ser chamada após a sua declaração
?