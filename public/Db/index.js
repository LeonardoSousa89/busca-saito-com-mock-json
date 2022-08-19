/** código de ensaio de busca. */
const Db = require('./data.json')

console.log('dados gerais.')
Db.map(e => {
    console.log(e)
})

console.log('--------------------------------------------------------------------------------------------------')

console.log('busca individual.')
const meuCodigo1 = "@vgh1248.*/23"
const meuCodigo2 = "1234" //@vg45rt%6&*/
const meuCodigo3 = "@vg454+9.658*/"
Db.filter(e => {
    if (e['codigo-saito']  == meuCodigo1) {
        console.log(e)
    } if(e['codigo-saito'] == meuCodigo2){
        console.log(e)
    } if(e['codigo-saito'] == meuCodigo3){
        console.log(e)
    } else {
        console.log('código não encontrado.')
    }
})

console.log('------------------------------------------------------------------------------')
console.log('https://www.mundojs.com.br/2018/02/05/algoritmos-de-busca-sequencial-e-binaria/')
console.log('caso de uso de busca sequencial')
let lista = [ 1,2,3,4,5,6,7,8,9,10]
function buscaSequencial(umVetor, item){
    let pos = 0;
    let achou = false;

    while(pos < umVetor.length && !achou){
        if (umVetor[pos] === item){
            achou = true;
        }
        else{
            pos = pos+1;
        }
    }

    return achou;
}

console.log(buscaSequencial(lista,10))

console.log('------------------------------------------------------------------------------')
console.log('https://www.mundojs.com.br/2018/02/05/algoritmos-de-busca-sequencial-e-binaria/')
console.log('https://edisciplinas.usp.br/pluginfile.php/5196824/mod_resource/content/1/slides-aula06-parte2.pdf')
console.log('caso de uso de busca binaria')
function buscaBinaria(umVetor, item) {
    let prim = 0;
    let ult = umVetor.length - 1;
    let achou = false;

    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2);
        if (umVetor[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < umVetor[meioLista]) {
                ult = meioLista - 1;
            }
            else {
                prim = meioLista + 1;
            }
        }
    }
    return achou;
}

console.log(buscaBinaria(lista,7))