/*
*Aproveitando pra praticar consumo de API com (fetch)
*A API que usei foi (jsonplaceholder)
*/

const frm = document.querySelector("form");
const resp = document.querySelector("pre");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pesquisa = Number(frm.idnumero.value);
    resp.innerText = "Buscando....";

    fetch(`https://jsonplaceholder.typicode.com/posts/${pesquisa}`)
        .then(response => {
            if (!response.ok) throw new Error("Post não encontrado");
            return response.json();
        })
        .then(data => {
            resp.innerText = `Titulo: ${data.title} \n\n Conteúdo: ${data.body}`
            console.log("Titulo:", data.title);
            console.log("conteudo:", data.body);
        })

        .catch(error => {
            resp.innerText = "Erro" + error.message;
            console.log("Erro na requisição");
        });
});