const usuario = "Usuario1";
const senha = "Senha1";

const campoUsuario = document.getElementById("username");

const campoSenha = document.getElementById("password");

function login() {
  if (campoUsuario.innerText == usuario && campoSenha.innerText == senha) {
    alert("Parabéns, você logou com sucesso!");
    return;
  }
}