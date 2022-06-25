
const refrigerante = 11.99 * 3
const macarao = 6.99  * 4
const ervilha = 6.99 * 3
const arroz = 22.99 * 3
const feijao = 11.89 * 2
const vinho = 70 * 3


let refriTotal = refrigerante
console.log(`valor Total do refrigerante é R$${refriTotal}`)
let macaTotal = macarao
console.log(`valor Total do macarão é R$${macaTotal}`)
let ervilhaTotal = ervilha
console.log(`valor Total do ervilha é R$${ervilhaTotal}`)
let arrTotal = arroz
console.log(`valor Total do arroz é R$${arrTotal}`)
let feijTotal = feijao
console.log(`valor Total do feijão é R$${feijTotal}`)
let vinTotal = vinho
console.log(`valor Total do Vinho é R$${vinTotal}`)

let total = refriTotal + macaTotal + arrTotal + ervilhaTotal + feijTotal + vinTotal

console.log(`valor total dos prudutos é R$${total}`)
let divsaoAmigos = total / 2


if(total%2 == 0){

    let user = divsaoAmigos  - vinho
    let mano = divsaoAmigos + vinho
    let tratamentoDivisao = user + 16.18
    let tratamentoDivisao1 = mano -16.17 
    console.log(`A soma deu R$${total} então pagarei a metade R$${tratamentoDivisao.toFixed(2)} 
e o meu amigo pagara ${tratamentoDivisao1.toFixed(2)} pois a divisao total seria ${divsaoAmigos} + o total do seu vinho ${vinTotal} `)
}else{
    console.log(`O valor total será R$${total} que é  impar então cada um pagará R$${divsaoAmigos.toFixed(2)} `)
}


//Extras
let pRefrigerante = parseFloat(prompt('Digite o preço do refrigerante: '))
let quntRefri  = +prompt('Digite a quantidade: ')
let pMacarao = parseFloat(prompt('Digite o preço do macarão: '))
let quntMacarao = +prompt('Digite a quantidade: ')
let pErvilha = parseFloat(prompt('Digite o preço da ervilha: '))
let quntErvilha = +prompt('Digite a quantidade: ')
let pArroz = parseFloat(prompt('Digite o preço do arroz: '))
let quntArroz = +prompt('Digite a quantidade: ')
let pFeijao = parseFloat(prompt('Digite o preço do feijão: '))
let quntFeijao = +prompt('Digite a quantidade: ')
let pVinho = parseFloat(prompt('Digite o preço do vinho: '))
let quntVinho = +prompt('Digite a quantidade: ')


let totalPromptRefip = pRefrigerante * quntRefri; 

let totalPromptMacarao = pMacarao * quntMacarao; 
let totalPromptErvilha =  pErvilha * quntErvilha; 
let totalPromptArros = pArroz * quntArroz;
let totalPromptFeijao = pFeijao * quntFeijao; 
let totalPromptVinho = pVinho * quntVinho;



function soma(){
    let result = 0
    result = totalPromptRefip + totalPromptMacarao + totalPromptErvilha + totalPromptArros + totalPromptFeijao + totalPromptVinho
    //soma total
    alert(`O VALOR TOTAL DOS PRODUTOS SERÁ  R$${result.toFixed(2)}`)
    alert(`loading....
    aperte ok para continuar`)

    let divisao = result / 2
    if(result%2 ==0){
        alert(`A soma deu R$${result} que é par  então o meu amigo pagara o valor total do vinho que é R$${totalPromptArros.toFixed(2)} + a divisão das compras R$${divisao.toFixed(2)}`)
    }else{
    alert(`O valor total será R$${result} que é  impar então cada um pagará R$${divisao.toFixed(2)} `)

    }
}

soma()



