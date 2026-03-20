/*
Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
Para formar um triângulo , um dos lados lados não pode ser maior que a soma dos outros dois .Caso possam formar um triâgulo ,exiba também qual o tipo do triângulo : Equilátero(3 lados iguais), Isósceles(2 lados iguais) e Escaleno(3 lados diferantes)
*/
const frm = document.querySelector("form")
const resp1 = document.querySelector("#res1")
const resp2 = document.querySelector("#res2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const ladoA = Number (frm.idvalor1.value)
    const ladoB = Number(frm.idvalor2.value)
    const ladoC = Number(frm.idvalor3.value)

    if(ladoA >= ladoB + ladoC ||ladoB>=ladoC +ladoA||ladoC>=ladoA+ladoB ){
        resp1.innerText= `O lados (A, B ,C) não podem forma um Triângulo`
        resp2.innerText=`Digite outros valores `
        return
    }
    let equilatero = ladoA=== ladoB && ladoB===ladoC

    let isosceles = ladoA == ladoB &&ladoB!=ladoC ||ladoB==ladoC &&ladoC!=ladoA ||ladoC==ladoA &&ladoA!=ladoB
    if(equilatero){
        resp1.innerText= `Lados podem forma um triâgulo`
        resp2.innerText= ` Tipo: Equilátero`;
        
    }else if(isosceles){
        resp1.innerText=`Lados podem forma um triângulo`
        resp2.innerText=`Tipo:Isóceles`;
    
    }else{
        resp1.innerText=`Lados podem forma um triângulo`
        resp2.innerText=`Tipo:Escaleno`;
    
    }

})