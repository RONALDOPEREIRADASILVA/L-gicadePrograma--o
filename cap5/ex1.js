/*Execício
A copa do mundo ocorre de 4 em 4 anos, desde 1930 , exeto nos anos de 1942 e 1946 (Segunda Guerra Mundial).Costrua um programa que repita a leitura de números (anos) até ser digitado 0.Informe para cada ano se ele é ou não ano de Copa do Mundo. 
*/

const frm = document.querySelector("form")
const res = document.querySelector("h3")
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const ano =Number(frm.idnumero.value)
        if(ano == 0){
         res.innerText="Digite um ano válido";
         return;
        }else if(ano == 1942 || ano == 1946 ){
            res.innerText=`Não houve copa do mundo em ${ano}(Segunda Guerra Mundial)`;
        }else if(ano >= 1930 && ano % 4 == 2){
            res.innerText= ` Sim! ${ano} é ano de copa do mundo`;
        }else{
            res.innerText=`Não...${ano} não é ano de copaa do mundo`;
        }

     frm.idnumero.value=""
     frm.idnumero.focus();
})
