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

function adicionarNovoUsuario() {
  var inputButton = document.querySelector('input[value="Cadastrar Funcionario"]');
  if (inputButton) {
    inputButton.addEventListener("click", function () {
      // Gera um novo login e senha
      var novoLogin = "user" + (usuarios.length + 1);
      var novaSenha = Math.floor(Math.random() * 1000 + 1).toString();
  
      // Adiciona o novo usuário à lista
      usuarios.push({
        login: novoLogin,
        senha: novaSenha,
      });
  
      console.log("Novo usuário criado:", novoLogin, novaSenha);
      alert("Novo usuário criado:", novoLogin, novaSenha);
    });
  } else {
    console.error("O elemento não foi encontrado");
  }
}

document.addEventListener("DOMContentLoaded", adicionarNovoUsuario);


  