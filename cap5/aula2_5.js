const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero= Number(frm.idnumero.value)
    let resposta = `Entre ${numero} e 1 :`

    for(let i = numero; i > 0 ;i-1 ){
        resposta = resposta + i + ","
    }

    res.innerText=resposta
})