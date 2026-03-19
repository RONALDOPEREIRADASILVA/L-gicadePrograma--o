/*
Elaborar um programa que leia a velocidade permitida em uma estrada
e a velocidade de um condutor.Se a velocidade for inferior ou igual à permitida ,
exiba "Sem Multa ". Se a velocidade for 20% maior qua a permitida , "Multa Leve".
E, se a velocidade for superior a 20% da velocidade permitida , exiba "Multa Grave". 
*/

const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()
    const veloPerm = Number(frm.idvelocidadePerm.value)
    const veloCond = Number(frm.idvelocidadeCondu.value)
   

     if( veloCond <= veloPerm){
        res.innerText=`Sem Multa`
        return
     }

    let multaLeve =veloPerm * 1.20
    
     if(veloCond<= multaLeve ){
        res.innerText=` Sua velocidade é :${veloCond} Multa Leve`
    }else {
        res.innerText = `Sua velocidade é :${veloCond} Multa Grave`
    }
})