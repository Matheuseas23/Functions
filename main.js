/*
function mensagem () {
alert("Seja muito bem-vindo(a)!")
console.log("Mais uma vez, seja bem-vindo")
}

mensagem()

*/

/*
Exemplo 2 - função com parâmetros

function somar(valor1, valor2) {
alert(valor1 + valor2)
}

somar(30, 40)

*/

/*
function mensagemPessoal(nome, cargo, anosTrabalhados) {
alert(Seja bem-vindo(a)  ${cargo} ${none}. Estamos felizes por ter você trabalhando conosco há ${anosTrabalhados} anos.)
}

mensagemPessoal("Lucas", "Gerente", 10)
mensagemPessoal("Irineu", "Você não sabe, nem eu", 50)
*/

/*

EXEMPLO 4 - retrorno das funções

function somarEDevolver(numero1, numero2, numero3) {
let resultado = numero1 + numero2 + numero3
return resultado
}

//guardar numa variavel ou guardar em qualquer lugar no código

let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)
*/

/*
EXEMPLO 5
function ParOuImpar(numero) {
if (numero % 2 === 0) {
return "PAR"
} else {
return "ÍMPAR"
}
}

let resultado1 = parOuImpar(10)
let resultado2 = parOuImpar(15)

alert(O número 10 é ${resultado1})
alert(O número 15 é ${resultado2})
*/

/*
Exemplo 6
//funções anonimas
document.querySelector("button").addEventListener("click", function() {
alert("Clicou no botão")
})
*/

/*
EXEMPLO 7 - arrow fuctions
//arrow fuctions

document.querySelector("button").addEventListener("click", () => {
alert("Clicou no botão")
})

*/

/*
EXEMPLO 8 - arrow functions com variaveis

let somar = (valor1, valor2) => valor1 + valor2

let resultado = somar(20, 30)
alert(resultadoSoma)

*/