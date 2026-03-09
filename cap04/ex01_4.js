const frm =document.querySelector("form");
const res1 = document.querySelector("h3")
const res2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    const nome =frm.idnome.value 
    const nota1 = Number(frm.nota1.value)
    const nota2 = Number(frm.nota2.value)
    const media = (nota1 + nota2) / 2
    res1.textContent = `Média: ${media.toFixed(1)}`

    if (media >=7){
        res2.innerText=`${nome} veçê foi aprovado`
        res2.style.color="blue"
    }else if(media >= 4){
        res2.innerText=`${nome} Voçê esta de  Exame Final`
        res2.style.color="green"
    }else {
        res2.innerText=`${nome} voçê foi  Reprovado`
        res2.style.color="red"
    }
    e.preventDefault();
})