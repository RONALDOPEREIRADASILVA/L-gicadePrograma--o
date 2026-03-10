const frm = document.querySelector("form")
const res = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
 e.preventDefault()
    const nome = frm.idnome.value
    const masculino = frm.idmasculino.checked
    const altura = Number(frm.idaltura.value)

    let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)

    } else {
        peso = 21 * Math.pow(altura, 2)
    }


    res.innerText = ` ${nome} seu peso ideal é: ${peso.toFixed(3)} kg`

   
})
frm.addEventListener("reset" , ()=>{
    res.innerText=""
})
