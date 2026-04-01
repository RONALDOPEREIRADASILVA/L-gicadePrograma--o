/*Execício
A copa do mundo ocorre de 4 em 4 anos, desde 1930 , exeto nos anos de 1942 e 1946 (Segunda Guerra Mundial).Costrua um programa que repita a leitura de números (anos) até ser digitado 0.Informe para cada ano se ele é ou não ano de Copa do Mundo. 
*/

const prompt =require ("prompt-sync")()
console.log("Programa Anos de Copa .Digite 0 para Sair ")
console.log("-------------------------------------------------")

do{
    const ano =Number(prompt("Ano:"))
    if(ano== 0){
        break
    }else if( ano == 1942 || ano ==1946){
       console.log(`Não é ano de copa em ${ano}(Segunda Guerra Mndial)`)
    }else if(ano>= 1930 && ano % 4 ==2){
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    }else{
        console.log(`Não ....${ano} não é ano de Copa do Mundo`)
    }

}while(true)
