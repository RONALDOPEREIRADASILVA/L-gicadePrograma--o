const frm = document.querySelector("form")
const res = document.querySelector("h3")
frm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const numero= Number(frm.idnumero.value)
     let nunPrimo = 0

     for(let i = 2 ; i<= numero / 2;i++){
        if(numero % i== 0){
          nunPrimo =1
          break
        }
     }

     if(numero > 1 && ! nunPrimo){
        res.innerText=`${numero} é primo `
     }else{
        res.innerText=`${numero} não é primo`
     }
})