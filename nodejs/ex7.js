/*
Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto .Exiba as etiquetas com o nome 
do produto, com no máximo 2 etiquetas por linha.y 

*/
const prompt = require("prompt-sync")()
const produto = prompt("produto:")//lêr o nome do produto e ....
const num = Number(prompt("N de etiquetas:")) //quantidade de etiquetas

for(let i = 1; i <= num /2 ; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
 if(num % 2 == 1){ //se quantidade solicitada  de etiqueta for ímpar
    console.log(produto)//imprime mas etiquetas
 }