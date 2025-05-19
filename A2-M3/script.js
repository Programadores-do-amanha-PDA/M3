

// // funções anonimas 
// () => {}

// // associando função anonima a variaveis 
// const somar = (a,b) => {
//    return a + b
// }
// const nomes = ['beatriz', 'tabata']

// // associando função anonima a um callback
// nomes.map(() => {});

// 1. Verificar se o valor da compra dá direito a frete grátis (acima de 100 frete gratis)
const frete = (valorCompra) => {
    if(valorCompra > 100){
        return 'tem frete gratis'
    }else{
        return 'não tem frete gratis'
    }
}
// 2. Calcular o valor de uma parcela (que foi dividida em 3x)  30 -> 10
// 3. Adicionar R$10 de taxa ao valor 50 -> 60


// SEGUNDO PASSO
// Utilizar a DOM
const inputValorCompra = document.getElementById('valorCompra');
const btnFrete = document.getElementById('btn-frete');

// add -> adicionar
// Event -> evento
// Listener -> ouvinte/ ouvir 
btnFrete.addEventListener('click', ()=> {
    // nao esquecer do .value como a teacher!!!!!
   const resultFrete = frete(parseInt(inputValorCompra.value));
   alert(resultFrete)
});

// 4. Verificar a quantidade de produtos se tiver 3 ou mais de um produto dá direito a frete grátis 
// 2. Calcular o valor de uma parcela (que foi dividida em x vezes)
// 3. Adicionar taxa proporcional de 3% no valor total da compra.

