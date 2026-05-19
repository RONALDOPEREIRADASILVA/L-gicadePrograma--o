const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];
frm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    const nome = frm.idnome.value;
    const idade = Number(frm.ididade.value);
    criancas.push({idade, nome});//Adiciona dados ao vetor de objetos
    frm.reset();//limpa o campo do formulário
    frm.idnome.focus(); //posiciona no campo do formulário
    frm.btlista.dispatchEvent(new Event("click"));//dispara um click em btlista
});

frm.btlista.addEventListener("click", ()=>{
    if(criancas.length==0){
        alert("Não ha crianças na lista");
        return;
    }
    let lista="";
    for(const crianca of criancas){
        const{nome , idade}= crianca //desestrutura o objeto

        lista+= nome + "-" + idade + "Anos\n";
    }
    resp.innerText= lista;
})
frm.btresumir.addEventListener("click",()=>{
    if(criancas.length == 0){
        alert("Não ha crianças na lista")
        return;
    }
    const copia = [...criancas]; //cria uma cópia co vetor criança
    copia.sort((a,b)=> a.idade - b.idade);//ordena pela idade
    let resumo ="";
    let aux =copia[0].idade; //menor idade do vetorordenado
    let nomes = [];//para inserir nomes de cada idade 
    for(const crianca of copia){
        const {nome,idade}= crianca;
        if(idade == aux){
            nomes.push(nome) //adiciona o vetor ao nome 
        }else{//se não monta o resumo para cada idade
            resumo+= aux + "Ano(s):" + nomes.length +"criançs(s) - ";
            resumo += ((nomes.length/ copia.length)* 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(",")+ ")\n\n";
            aux = idade; //obtém nova idade na ordem
            nomes =[]; //limpa o vetor nomes
            nomes.push(nome)//adiciona o primeiro da nova idade 

        }
    }
    resumo += aux + "Ano(s):" + nomes.length + "criança(s) -";
    resumo += ((nomes.length/ copia.length) *100).toFixed(2) + "%\n";
    resumo += "(" +nomes.join(",") + ")\n\n";
    resp.innerText= resumo;


})