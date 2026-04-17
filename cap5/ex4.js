/*
Elaborar um programa que leia um número e verifique se ele é ou não perfeito.
Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiro(exeto o próprio número). O programa deve exibir os divisores do número e a soma deles .
*/

const frm = document.querySelector("form");
const res = document.querySelector("h3");
const res2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.idnumero.value);
    let soma = 0;
    let divisores = "";

    for (let i = 1; i < num; i++) {

        if (num % i == 0) {
            soma += i;

            if (divisores == "") {
                divisores = i;
            } else {
                divisores = divisores + "," + i ;
            }
        }

    }
    res.innerText = `Divisores do ${num}: ${divisores} (Soma: ${num}) `;

    if (soma== num) {
        res2.innerText = `${num} É um Número Perfeito`;
    } else {
        res2.innerText = `${num} Não é um Número Perfeito`;
    }
});