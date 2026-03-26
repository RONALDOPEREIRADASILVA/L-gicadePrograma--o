const frm = document.querySelector("form")
const res = document.querySelector("pre")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.idnumero.value)
    let resposta ="";
 
    for(let i = 1; i <= 15; i++){
    

        if(i % 2 ==0){
            resposta=resposta + i + "É par \n";
        }else{
            resposta= resposta + i + 
            " É Ímpar \n"
        }
    }
     res.innerText=resposta;
})