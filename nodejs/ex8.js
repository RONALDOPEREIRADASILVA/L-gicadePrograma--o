/*
Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um criente deseja percelar esse valor (em boletos ou carnê). Para facilitar o troco ó lojista deseja que as pacelas iniciais não tenham centavos , ou seja , centavos apenas na última parcela .Informe como resposta o valor de cada parcela , considerando essa situaçâo.

*/

const prompt = require("prompt-sync")()
const valor = Number (prompt("Valor R$:"))//lêr o valor do carne
const num = Number (prompt("N de percelas:"))//numero de parcelas
const valorParcela =Math.floor(valor / num) //calcula o valor sem decimais
const valorFinal = valorParcela + (valor % num) //calcula parcela final

for(let i = 1; i < num; i++){
   console.log(`${i} Parcelas: R$ ${valorParcela.toFixed(2)}`)
}
