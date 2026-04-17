/*
Digamos que o número de chinchilas de uma fazenda triplicar a cada ano, após o primeiro ano .Elaborar um programa que leia o número inicial de chichilas e anos e informe ano a ano o número médio previsto de chichilas da fazenda . O número inicial de chichilas deve ser maior ou igual a 2 (um casal) 
*/
 const frm = document.querySelector("form");
 const resp = document.querySelector("pre");

 frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nunChichila = Number(frm.idnumero.value);
    const ano = Number(frm.idnumero2.value);
    let respoata ="";
    let total = nunChichila;//começa com o valor que o usuário digitou

    for(let i = 1; i <= ano; i++){//Olaço conta de um até o limite de anos.
        if(i>1){
            total = total * 3
        }
        
        respoata += `  ${i} Ano:${total} Chichilas \n`;
        
    }
    resp.innerText= respoata;
 })