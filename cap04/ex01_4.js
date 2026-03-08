const frm =document.querySelector("form");
const res1 = document.querySelector("h3")
const res2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    const nota1 = Number(frm.nota1.value)
    const nota2 = Number(frm.nota2.value)
    const media = (nota1 + nota2) / 2
    res1.textContent = `Média: ${media.toFixed(1)}`

    if (media >=7){
        res2.innerText="Aprovado"
        res2.style.color="green"
    }else if(media < 7){
        res2.innerText="Reprovado"
        res2.style.color="red"
    
    }
    e.preventDefault();
})