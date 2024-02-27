// a função que o "verificarLogin" irá exercer
function verificarLogin(){
    //let é uma variavel que quando executada não ficará na memoria, o proximo é para chamar elementos do html
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");

    //const é uma variavel 
    const login = "teste";
    let senha = "teste2";

    //se a variavel "txtLogin" for igual ao "login e txtSenha" = senha
    //.value é para o valor da variavel
    if(txtLogin.value == login && txtSenha.value == senha) {
        console.log("Logado com sucesso!");
    } else{
        console.log("Login ou Senha incorretos.");
    }
}
