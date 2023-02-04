
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



document.getElementById("myButton").onclick = function() {
  var nomeDoUsuario = prompt("Digite seu login");
  var usuario = usuarios.find(u => u.login === nomeDoUsuario);
  if (usuario) {
  alert("Você clicou o botão às " + new Date().toLocaleTimeString() + " como " + nomeDoUsuario);
  } else {
  alert("Usuário não encontrado");
  }
};

  document.getElementById("myButton2").onclick = function() {
    var nomeDoUsuario = prompt("Digite seu login");
    var usuario = usuarios.find(u => u.login === nomeDoUsuario);
    if (usuario) {
    alert("Você clicou o botão às " + new Date().toLocaleTimeString() + " como " + nomeDoUsuario);
    } else {
    alert("Usuário não encontrado");
    }
    console.log(nomeDoUsuario);
  };

  document.getElementById("myButton3").onclick = function() {
    var nomeDoUsuario = prompt("Digite seu login");
    var usuario = usuarios.find(u => u.login === nomeDoUsuario);
    if (usuario) {
    alert("Você clicou o botão às " + new Date().toLocaleTimeString() + " como " + nomeDoUsuario);
    } else {
    alert("Usuário não encontrado");
    }
  };


  document.getElementById("myButton4").onclick = function() {
    var nomeDoUsuario = prompt("Digite seu login");
    var usuario = usuarios.find(u => u.login === nomeDoUsuario);
    if (usuario) {
    alert("Você clicou o botão às " + new Date().toLocaleTimeString() + " como " + nomeDoUsuario);
    } else {
    alert("Usuário não encontrado");
    }
    };
