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