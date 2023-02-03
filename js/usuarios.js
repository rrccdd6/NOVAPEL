class usuario {
    login;
    pasword;
    nome_usuario;
}

const usuario1 = new usuario();
usuario1.login = "Betinho"
usuario1.pasword = "admin"
usuario1.nome_usuario = "Roberto Lobato"



const usuario2 = new usuario();
usuario2.login = "Poliana"
usuario2.pasword = "admin"
usuario2.nome_usuario = "Poliana Ribeiro"



conectar();

function conectar() {
    if (usuario === '') {
        alert("ACESSO NEGADO");
        return false;
    } else {
        return true;
    }

}

function conectar() {
    if (usuario.login != usuario.login) {
        console.log("negado")
        return;
    } else {
        console.log("permitido")
        return;
    }
}

mostrar();

function mostrar() {
    console.log(usuario1, usuario2);
}