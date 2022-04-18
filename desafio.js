let clienteLilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }
]
let clienteMaria = [
    { produto: 'Bolsa de mão', valor: 29.0 },
    { produto: 'Óculos preto', valor: 35.0 },
    { produto: 'Saia de Couro ', valor: 99.0 },
    { produto: 'Calça preta', valor: 100.0 },
]
let clienteJuliana = [

    { produto: 'Óculos preto', valor: 35.0 },
    { produto: 'Blusa de gola Vermelha ', valor: 45.0 },
    { produto: 'meia calça transparente', valor: 30.0 },
    { produto: 'Saia branca', valor: 50.0 },
]

function comprar(arrayDeCompras) {
    let valorTotal = 0
    let descontoTotal = 0
    let valorFinal = 0
    let quantidadeDeItens = arrayDeCompras.length
    for (let item of arrayDeCompras) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            let desconto1 = item.valor * 0.5
            valorFinal += (item.valor - desconto1)
            descontoTotal += (desconto1)
        } else if (item.valor >= 100.0) {
            let desconto2 = item.valor * 0.2
            valorFinal += (item.valor - desconto2)
            descontoTotal += (desconto2)
        } else if (item.valor >= 80.0) {
            let desconto3 = item.valor * 0.1
            valorFinal += item.valor - desconto3
            descontoTotal += desconto3
        } else if (item.valor >= 50.0) {
            let desconto4 = item.valor * 0.05
            valorFinal += (item.valor - desconto4)
            descontoTotal += (desconto4)
        } else {
            valorFinal += item.valor
        }
    }
    let dataCompra = new Date()
    console.log(dataCompra)

    let cupomFiscal = {
        "Valor Total sem o desconto": `R$${ valorTotal.toFixed(2).replace('.',',')}`,
        "Valor do Desconto Total": `R$${ descontoTotal.toFixed(2).replace('.',',')}`,
        "Valor Total com o desconto": `R$${ valorFinal.toFixed(2).replace('.',',')}`,
        "Data da Compra": dataCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }
    if (quantidadeDeItens > 10 || valorFinal > 800.0) {
        return console.table({
            ...cupomFiscal,
            "Bônus": 'Você ganhou um voucher de R$50,00, para utilizar na sua próxima compra. '
        })
    } else {
        return console.table(cupomFiscal)
    }
}

comprar(clienteLilit)
comprar(clienteJuliana)
comprar(clienteMaria)




//...cupomfiscal, quer dizer que estou espalhando esse objeto dentro do cupom fiscal, junto com os valores que ja foram descritos anteriormente, evita reescrever o código
// fixed () significa fixar casa decimais após o numero
//replace('', '') significa trocar um item por outro//console.tableé quase igual console .log, mas ordenao que estaravisivel no console
//`${}`chamei a váriavel dentro do console.table, junto cpom o texto//
//Date tras a data no estilo EUA de acordo com o sistema