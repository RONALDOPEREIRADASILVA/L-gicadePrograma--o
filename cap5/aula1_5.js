const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const numero = Number(frm.idnumero.value)

    let reposta =""

    for(let i = 1 ; i <= 10; i++){
        reposta= reposta + numero + "x" + i + "=" + (numero* i) + "\n"
        /*
        Ou
        resposta =` ${resposta} ${numero} x ${i} =${numero * i} \n`
        */
    }
    res.innerText= reposta
})