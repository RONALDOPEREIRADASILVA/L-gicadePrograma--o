const frm = document.querySelector("form");
const resErro = document.querySelector("iderros");
const resChances = document.querySelector("idchance");
const resDica = document.querySelector("iddica");
const erros=[];//vetor de escopo global com números já apostado
const sorteado = Math.floor(Math.random()*100) +1 ;//número aleatório entre 1 e 100
const CHANCES =6 ; //constante com o número máximo de CHANCES

frm.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    const numero = Number(frm.idnumero.value);
    if(numero==sorteado){
        resDica.innerText= `Parabéns!! número Sorteado: ${numero}`
        frm.btsubmit.disabled= true;// troca o estatus do botão
        frm.btnovo.className="exite"

    }else{
        if(erros.includes(numero)){
            alert(`Voçê já apostou o número ${numero}.Tente outro....`)
        }else{
            erros.push(numero)//adiciona número ao vetor 
            const numErros = erros.length//obtem o tamanho do vetor 
            const numChance = CHANCES - numErros //calcula o número de CHANCES

            resErro.innerText=` ${numErros} (${erros.join(",")})`; //exibe o número de erros , conteúdo do vetor erros
            resChances.innerText=numChance;
            if(numChance==0){
                alert("Suas chances acabaram....")
                frm.btsubmit.disabled=true
                frm.btnovo.className="exibe"
                resDica.innerText=` Game Ove!! Número Sorteado: ${sorteado}`
            }else{
                const dica = numero < sorteado ? "maior" : "menor"
                resDica.innerText=`Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }

    frm.idnumero.value="";
    frm.idnumero.focus()
})
