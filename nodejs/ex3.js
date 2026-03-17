/*
Elaborar um programa que leia um número : que deve ser uma centena . Calcule e exiba 
a centena invertida .Caso o número não seja uma centena , exiba uma mensagem.
*/

const prompt = require("prompt-sync")()  //adciona o pacote prompt-sync
const numero = Number(prompt("Número (centena):")) //lê o número

if(numero < 100 || numero >= 1000){
    console.log("Erro ... deve ser uma centena")
    return
}
const nun1 = Math.floor(numero / 100) // obtém 1 número
const sobra = numero % 100 // o que sobra (dezena)
const nun2 = Math.floor(sobra / 10) //obtém 2 número
const nun3 = sobra % 10 //obtém 3 número
console.log(` Invertido: ${nun3} ${nun2} ${nun1}`) //exibe o número invertido