/*
*Praticando consumo de API
*Nesse exemplo vou usa a API: Picsum Photos
*/

const frm = document.querySelector("form")
const resAutor = document.querySelector("#autor")
const resFoto = document.querySelector("#foto")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault();

    const idfoto = frm.idnumero.value; 

    fetch(`https://picsum.photos/id/${idfoto}/info`)

      .then(response =>{
        if(!response.ok) throw new Error("Imagem não encontrada");
        return response.json();
      })

      .then(data =>{
        resAutor.innerText= data.author;

        resFoto.src = data.download_url;
        resFoto.alt = data.author;
      })

      .catch(error => {
        resAutor.innerText="Erro" +  error.message;
        resFoto.src ="";
      });
      
    
});