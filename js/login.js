var usuarios = [
  {
    login: 'admin',
    senha: '123',
  },
  {
    login: 'user1',
    senha: '456',
  },
  {
    login: 'user2',
    senha: '789',
  }
];

  // VARIÁVEIS
  var username = "";
  var password = "";
  var nomeDoUsuario = "";

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
      nomeDoUsuario = username;
      return true;
    }
  }
  