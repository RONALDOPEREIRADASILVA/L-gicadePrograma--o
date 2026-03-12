/*
Sabendo que o fuso ho´rarioda frança em relação ao Brasil é de + 5 horas (no horário de verão na frança ), elabore um programa que leia a hora no Brasil e informe na França .
*/

const frm =document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const horaBrasil = Number( frm.idhora.value)

    let horaFraca = horaBrasil + 5
    if(horaBrasil < 24){
        horaFraca = horaFraca -24
    }
    res.innerText =`Hora Na França é: ${horaFraca.toFixed(2)}`
})