// VARIÁVEIS

//var usuario = document.getElementById("usuario").value;
//var senha = document.getElementById("senha").value;
//var login = $("input:usuario")
//var psw = $("input:senha")

// FUNÇAO SUBMIT

//function submit_by_id() {

   // var usuario = document.getElementById("usuario").value;
   // var senha = document.getElementById("senha").value;

   // if (validation(true)) // CHAMADA DE VALIDAÇAO
   // {
  //      document.getElementById("formulario").submit();
   //     alert(" Usuário : " + usuario + " Senha : " + senha + " " + " ENTRADA AUTORIZADA");
  //  }
//}

// VALIDAÇÃO DE USUARIO E SENHA 

//function validation() {

 //   var usuario = document.getElementById("usuario").value;
//var senha = document.getElementById("senha").value;

//    if (usuario === '' || senha === '') {
 //       alert("ACESSO NEGADO");
 //       return false;
 //   } else {
  //      window.localStorage
 //       return true;
 //   }
//}

   // VARIÁVEIS
   var username = "";
   var password = "";

   // FUNÇAO SUBMIT
   function submitForm() {
     username = document.getElementById("usuario").value;
     password = document.getElementById("senha").value;

     if (validateCredentials()) {
       document.getElementById("formulario").submit();
       alert(" Usuário: " + username + " Senha: " + password + " ENTRADA AUTORIZADA");
     }
   }

   // VALIDAÇÃO DE USUARIO E SENHA 
   function validateCredentials() {
     if (username === '' || password === '') {
       alert("ACESSO NEGADO. Por favor, preencha todos os campos.");
       return false;
     } else {
       return true;
     }
   }