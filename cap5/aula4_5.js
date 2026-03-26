const frm = document.querySelector("form")
const resp1 = document.querySelector("#res1")
const resp2 = document.querySelector("#res2")
 
let valtotal=0
let numconta = 0
let resposta =""
 frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const descricao = frm.iddescricao.value
    const valor = Number(frm.idvalor.value)
    valtotal = valtotal + valor;
    numconta++
    resposta= resposta + descricao +" -R$" +valor.toFixed(2) + " \n" 
    resp1.innerText =`${resposta} --------------------------------`
    resp2.innerText = `${numconta} Conta (s) Total R$ ${valtotal.toFixed(2)} `
    frm.iddescricao.value=""
    frm.idvalor.value=""
    frm.iddescricao.focos()

 })