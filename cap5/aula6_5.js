/*
Faça um programa que ler um número que corresponda à quantidade de símolos 
que deve ser preenchidos(em um cheque ou um boletobancário, por exemplo)
O preenchimento deve intercala os caracteres "*" e "-". 
*/

const frm = document.querySelector("form") //Obtém elementos da página 
const res = document.querySelector("#espaco")

frm.addEventListener("submit", (e) => { //escuta o evento submit do form
    e.preventDefault() // evita o envio do form
    const numero = Number(frm.idnumero.value) //Obtém o número informado

    let estrelas = "" //variável que vai concatenar as estrelas/traços
    for (let i = 1; i <= numero; i++) { //cria um laço de repetição de 1 até numero
        if (i % 2 == 1) { //
            estrelas = estrelas + "*" //na posição ímpar do i : * 
        } else {
            estrelas = estrelas + "-"// na posição par do i : -
        }
    }
    res.innerText = estrelas //exibe as estrelas

    frm.idnumero.value = "" //limpa o campo de input


})