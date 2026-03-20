/*
Elaborar um programa para simular um parquímetro, o qual leia valor de moedas depositadas em um terminal de estacionamento rotativo .O programa deve informar o tempo de permanência do veículo no local e o troco (se existir).se o valor for inferior ao tempo mínimo , exiba a mensagem :"Valor Insuficiente".Considere os valores  / tempo. O máximo é 120 min.
  valor R$:1,00 = Tempo:30 min
  Valor R$:1,75 = Tempo: 60 min
  Valor R$:3,00 = Tempo: 120 min   
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#res1")
const resp2 = document.querySelector("#res2")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const valor = Number(frm.idvalor.value)

    if (valor < 100){
        resp1.innerText =`Valor insuficient`
        return
    }
    let troco
    let tempo

    if( valor >=300  ){
        tempo = 120
        troco= valor - 300;

    }else if( valor >= 175 ){
        tempo= 60
        troco= valor - 175;

    }else{
        tempo = 30
        troco = valor-100;
    }

    resp1.innerText=`Tempo ${tempo} min`
    resp2.innerText=`Troco R$: ${troco} `
})