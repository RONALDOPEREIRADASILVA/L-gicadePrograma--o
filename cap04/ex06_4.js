/*
Elsborar um programa que leia um número .Informe se ele é par ou ímpar. Faça com ij ...else...tradicional e após tente criar condições com o operador ternário . 
*/

const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
 e.preventDefault()
 const numero = Number(frm.idnumero.value)
 if(numero  % 2== 0 ){
    res.innerText= `O número ${numero} é par`
 }else{
   res.innerText=` O número é ${numero} ímpar`
 }
})