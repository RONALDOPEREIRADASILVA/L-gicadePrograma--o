/*
Uma farmácia necessita de um programaque leia o total de compra .
exiba como resposta o n máximo de vezes que o cliente pode parcelar essa compra
e o valor de cada parcela .Considere as seguintes condições:
A)cada parceela deve ser de , no minimo R$ 20,00.
B)O número máximo de parcelas é 6.  
*/
const prompt = require("prompt-sync")() //adciona pacote prompt-sync
const valor = Number(prompt("valor da compra R$:" )) //lêr o valor do campo
const aux = Math.floor(valor / 20) // número de parcelas sem condições
const parcela = aux == 0 ? 1 :aux > 6 ? 6 : aux // operador ternário
const valorparcela = valor / parcela //calculo de valor de parcelas 
console.log(`Pode pagar em ${parcela} x de R$ ${valorparcela.toFixed(2)}`) //