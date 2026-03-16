/*
A entrada para um clube de pesca custa R$20,00 por pessoas e cada pessoa tem direito a 
leva um peixe . Peixe extra s custam 12,00 .Elabore um programa que leia o número de 
pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria . Informe 
o valor a pagar 
*/
const prompt = require("prompt-sync")()
const pessoa = Number(prompt("N Pessoas:"))
const peixes = Number(prompt("N Peixes :"))
let pagar

if(peixes <= pessoa){
    pagar = pessoa * 20
}else{
    pagar = (pessoa * 20 ) + ((peixes - pessoa) * 12)
}
console.log(`Pagar R$ : ${pagar.toFixed(2)}`)
