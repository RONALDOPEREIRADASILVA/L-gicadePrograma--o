const frm = document.querySelector("form");
const res = document.querySelector("span");
const res1 = document.querySelector("pre");

const pacientes =[];//declara vetor global
frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita o envio de form
    const nome = frm.idpaciente.value;//obtém o nome do paciente
    pacientes.push(nome); //adiciona um nome no final do vetor
    
    let list = "";//string para conectar pacientes

    //for tradicional (inicia em 0  , enquanto menor que o tamanho do array)
    for(let i =0; i < pacientes.length; i++){
        list += ` ${i +1}.${pacientes[i]}\n `
    }
    res1.innerText = list;//exibe a lista de paciente na páginas
    frm.idpaciente.value="";//limpa conteúdo do campo de formulário
    frm.idpaciente.focus();//posiciona o cursor no campo 

})
//Adiciona um "ouvinte" para o evento click no bturgente que esta no form
frm.bturgencia.addEventListener("click" , () =>{
    //verifica se as validações do form estão ok(no caso ,pacientes is required)
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgêcia");
        frm.idpaciente.focus();
        return; //retorna ao form
    }
    const nome = frm.idpaciente.value;
    pacientes.unshift(nome);//adiciona o paciente no início do vetor 
    let list ="";
    
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((pacientes ,i) =>(list += `${i + 1}.${pacientes}\n`));
    res1.innerText= list;
    frm.idpaciente.value="";
    frm.idpaciente.focus();
})

frm.btAtender.addEventListener("click", () =>{
    //se o tamanho do vetor =0
    if(pacientes.length==0){
        alert("Não há paciente na lista de espera")
        frm.idpaciente.focus();
        return;
    }
    const atender = pacientes.shift();//remove do inicio da fila (e obtém nome)
    res.innerText=atender;
    let list ="";
    pacientes.forEach((pacientes, i)=>(list += `${i + 1}.${pacientes}\n`))
    res1.innerText= list
})