
/*
Elaborar um programa que leia a velocidade permitida em uma estrada
e a velocidade de um condutor.Se a velocidade for inferior ou igual à permitida ,
exiba "Sem Multa ". Se a velocidade for 20% maior qua a permitida , "Multa Leve".
E, se a velocidade for superior a 20% da velocidade permitida , exiba "Multa Grave". 
*/
const prompt = require("prompt-sync")()
const veloPerm = Number(prompt("Velocidade Permitida :"))
const veloCond = Number(prompt("Velocidade Condutor :"))

if(veloCond <= veloPerm){

  console.log(`Sua velocidade é de ${veloCond}  "Sem Multa  `)
 return
}
const multaLeve = veloPerm * 1.20

if(veloCond <= multaLeve){
    console.log(` Sua velocidade é ${veloCond} Multa leve`)
}else {
    console.log(`Sua velocidade é ${veloCond} Multa Grave `)
}