/*
Elsborar um programa que leia um número .Informe se ele é par ou ímpar. Faça com ij ...else...tradicional e após tente criar condições com o operador ternário . 

*/


const prompt = require("prompt-sync")()
const numero =Number( prompt("Digite um número:"))
if(numero <= 0){
  console.log("Digite um número valido")
}else if(numero %2 ==0){
    console.log(`O número ${numero} é par`)
}else{
    console.log(`O número ${numero} é ímpar`)
}