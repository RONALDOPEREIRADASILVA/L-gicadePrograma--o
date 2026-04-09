/* Execício
 Elaborar um programa que leia o nome de uma fruta e um número.O programa deve
 repetir a exibição do nome da fruta , de acordo com
 o número informado.Utilize o "*" para separar os nomes.

*/
const frm = document.querySelector("form");
const res = document.querySelector("h3");
let numFruta= 0;

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const fruta = frm.idnome.value;
    const num = Number(frm.idnumero.value);

    let estrelas=""
    for(let i =1; i<= num *2; i++){
        if(i % 2 ==0){
            estrelas = estrelas +  fruta + "*"
        }
    }

    res.innerText= estrelas

    frm.idnome.value="";
    frm.idnumero.value="";
    frm.idnome.focus();

});
