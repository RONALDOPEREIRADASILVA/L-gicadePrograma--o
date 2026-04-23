/*
  Inclusão e exclusão de itens.

  *principais métodos javascript que executam essas tarefas:
  *push() = Adiciona um elemento ao final do vetor.
  *unshift() =Adiciona um elemento ao início do vetor e desloca os elementos existentes uma posção abaixo.
  *pop = Remove o último elemento do vetor .
  *shift = Remove o primeiro elemento do vetor e desloca os elementos existentes uma posição acima. 
*/


    const cidades= ["Pelotas "]; //declara e define conteúdo inicial do vetor 

    cidades.push("São lorenço"); //A adiciona cidade ao final do vetor 
    console.log(cidades);

    cidades.unshift("Porto Alegre");//Adiciona ao início e desloca as demais 
    console.log(cidades);

    const ultima = cidades.pop();// Remove a última cidade do vetor.
    console.log(cidades);
    const primeira = cidades.shift();// Remove as primeira e sobe as demais 
    console.log(cidades);
    
