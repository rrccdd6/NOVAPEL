function logar() {

    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if (usuario.value == "@admin" && senha.value == "admin") {

        window.location.href("painelprincipal.html")
        window.localStorage.setItem("acesso", true);
        console.log("entrou")
    } else {
        alert("ACESSO NEGADO");
    }
}