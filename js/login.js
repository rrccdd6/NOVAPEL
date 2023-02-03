// VARIÁVEIS

var usuario = document.getElementById("usuario").value;
var senha = document.getElementById("senha").value;
var login = $("input:usuario")
var psw = $("input:senha")

// FUNÇAO SUBMIT

function submit_by_id() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (validation(true)) // CHAMADA DE VALIDAÇAO
    {
        document.getElementById("formulario").submit();
        alert(" Usuário : " + usuario + " Senha : " + senha + " " + " ENTRADA AUTORIZADA");
    }
}




// VALIDAÇÃO DE USUARIO E SENHA 

function validation() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === '' || senha === '') {
        alert("ACESSO NEGADO");
        return false;
    } else {
        window.localStorage
        return true;
    }
}