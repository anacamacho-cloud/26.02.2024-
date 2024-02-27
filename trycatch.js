//duas variaveis que estao atribuindo determinado "valor"
var variavel1 = "valor somente leitura";//const é outra forma de declarar uma variável que não pode ser mudada so lida
var variavel2 = "valor editável";

// se a variavel1 for mudada para "valor não permitido vai aparecer no console a frase abaixo"
try {
    //o novo valor da variavel
    variavel1="valor não permitido";
    //se for mudada aparecerá no console essa frase
    console.log("A variavel2 foi alterada para:", variavel1)
} catch (e){ // se não funcionar vai aparecer um alerta de erro no console dizendo
    console.error("Ops! ocorreu um erro",e);
}
//se a variavel1 for mudada para a frase abaixo no console aparecerá a frase tal
try {   
  //o novo valor da variavel
    variavel2="valor permitido";
    //se for mudada aparecerá no console essa frase
    console.log("A variavel2 foi alterada para:", variavel2)
} catch (e){// se não funcionar vai aparecer um alerta de erro no console dizendo
    console.error("Ops! ocorreu um erro",e);
}
