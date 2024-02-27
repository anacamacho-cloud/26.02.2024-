// a const atribui um valor
const sortear = () => {

    // declaração de variavel com vetores
    let nomes = ["Moranguinho", "Amorinha", "Laranjinha", "Gotinha de limão"," Cachinhos de framboesa", "Cerejinha"];

    // a variavel h1Nome traz o elemento do html
    // . é o método e tudo em "" é uma string
    let h1Nome = document.getElementById("nome");
    
    // declaração de duas variaveis
    let achouNumero = false;
    let numeroSorteado;

    //estrutura de repetição, dis == é um comparação
    // se o achouNumero for = a false o numero sorteado será multiplica um número gerado por 100
    while (achouNumero == false){
        numeroSorteado = Math.floor(Math.random() * 100);
    // se o numeroSorteado for menor que a variavel nomes a variavel achouNumero=true
        if(numeroSorteado < nomes.length){ 
            achouNumero = true;
        }
    }
    
    //esse codigo sorteia qual dos vetores será sorteado conforme a variavel numeroSorteado
    switch (numeroSorteado){
    
        //os case servem para o sorteio dos vetores, a quantidade de vetores é a quantidade de case
            case 0:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
            case 1:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
            case 2:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
           case 3:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
           case 4:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
           case 5:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
           case 6:
            h1Nome.innerText = nomes [numeroSorteado];
            break;
    
            //caso não acharem os nomes terá um alerta escrito essa frase
           default:
            h1Nome.innerText = "Ops! Nome não consta na lista"} 
    
    }