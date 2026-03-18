const prompt = require("prompt-sync")()
const numero =Number( prompt("Digite um número:"))
if(numero <= 0){
  console.log("Digite um número valido")
}else if(numero %2 ==0){
    console.log(`O número ${numero} é par`)
}else{
    console.log(`O número ${numero} é ímpar`)
}