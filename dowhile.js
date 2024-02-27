//declaração de variavél, onde ela tem vetores ao invez de um valor 
var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5"]
//variavel com o valor 1
var posicao = 1;

//estrutura de repetição que será executada se pocisão for menor q matrix 
//legth= o número de vetores
while (posicao < matriz.legth) {  
   //no console aparecerá...
    console.log(matriz[posicao]);
   //a posição vai somar, posição = posição + 1 
   posicao++;
}