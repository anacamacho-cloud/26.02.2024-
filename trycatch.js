//duas variaveis que estao atribuindo determinado "valor"
var variavel1 = "valor somente leitura";//const é outra forma de declarar uma variável que não pode ser mudada so lida
var variavel2 = "valor editável";

// se a variavel1 for mudada para "valor não permitido vai aparecer no console a frase abaixo"
try {
    variavel1="valor não permitido";
    console.log("A variavel2 foi alterada para:", variavel1)
} catch (e){
    // se não funcionar vai aparecer um alerta de erro no console dizendo
    console.error("Ops! ocorreu um erro",e);
}

//mesma coisa só muda para variavel2 ao invez da variavel1
try {
    variavel2="valor permitido";
    console.log("A variavel2 foi alterada para:", variavel2)
} catch (e){
    console.error("Ops! ocorreu um erro",e);
}