const frm = document.querySelector("form");// obtém elementos da página
const res = document.querySelector("pre");
 const carros =[];//vetor global
  frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //Evita envio de form

    const modelo= frm.idmodelo.value;
    const preco = Number(frm.idpreco.value);
    carros.push({modelo,preco}); //adiciona dados ao vetor de objetos
    frm.idmodelo.value="";
    frm.idpreco.value="";
    idmodelo.focus();

    frm.btLista.dispatchEvent(new Event("click"));


  })
  frm.btLista.addEventListener("click",()=>{
    if(carros.length==0){
      alert("Não há carros na lista")//Se tamanho do botão é igual a 0
      return
    }
    const lista=carros.reduce((acumulador, carro) => acumulador + carro.modelo + "-R$:" + carro.preco.toFixed(2) + "\n" , "")

    res.innerText = `Lista dos carros cadastrados\n${"-".repeat(40)}\n${lista}`
  })
  frm.btFiltrar.addEventListener("click", () =>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if(maximo==0 || isNaN(maximo)){
      return
    }
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carrosFilter.length==0){
      alert("Não há carros com preço inferior ou igual ao solicitado")
      return
    }
    let lista="";
    for(const carro of carrosFilter){
      lista += `${carro.modelo} -R$: ${carro.preco.toFixed(2)}\n`
    }
    res.innerText=`Carros Até  R$:${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
  
  })