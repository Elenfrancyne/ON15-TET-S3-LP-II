// declarar e nomear a função, sempre bom nomear com um verbo para indicar a ação , ao abrir a  as chaves abrir as aspas para definição do escopo  e ao final indicar o return, interrompendo a execução//
// assim que chama a função  sempre o nome da funçao é colado no parenteses/ /

//função sem argumentos chamado de função pura//
function funcaoUm() {
    let soma = 1 + 3
    return soma
}

console.log(funcaoUm())

//função que recebe um único  argumento//
function funcaoDois(numero) {
    let soma = numero + 3
    return console.log(soma)
}

funcaoDois(5)

//função com mais de um argumento//
function somar(numero1, numero2) {
    let soma = numero1 + numero2
    let dobroDaSoma = soma * 2
    return console.log(soma, dobroDaSoma)
}
somar(5, 7)

//Arrow function// não tem nome

//() => {}
function() {

}
somarTres = (numero1, numero2) => {
    let soma = numero1 + numero2
    return soma console.log(soma)
}
somarTres(6, 3)

//ou posso fazer assim:

let somar3 = (numero, numero2) => console.log(numero1 + numero2)
somar(7, 4)