const frm = document.querySelector("form")
const res =document.querySelector("h3")
 
frm.addEventListener("submit", (e) =>{
e.preventDefault()

const numero =Number (frm.idnumero.value)
const raiz = Math.sqrt(numero)

if(Number.isInteger(raiz)){
    res.innerText=` Raiz: ${raiz}`
}else{
    res.innerText=`Não há raiz exata para ${numero}`
}

})