const frm = document.querySelector("form")
const resp1 = document.querySelector("#res1")
const resp2 = document.querySelector("#res2")
const resp3 = document.querySelector("#res3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const saque =Number (frm.idvalor.value)
    if(saque % 10 != 0){
        alert("Valor para notas disponives (R$ 10 , 50 , 100)")
        frm.idvalor.focus()
        return

    }
     
    const notasCen = Math.floor(saque/ 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto=resto % 50
    const notasDez = Math.floor(resto / 10)
    if(notasCen >0){
        resp1.innerText= `Notas de R$:100 ${notasCen}`
    }
    if(notasCinquenta >0){
        resp2.innerText=`Notas de R$: 50${notasCinquenta}`
    }
  if(notasDez>0){
        resp3.innerText=`Notas de R$:10 ${notasDez}`
    }

})    