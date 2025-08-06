let amigos = [];

function adicionarAmigo() {
  const campoNomeAmigo = document.querySelector("#amigo");

  const nome = campoNomeAmigo.value.trim();

  if (nome) {
    amigos.push(nome);

    campoNomeAmigo.value = "";

    atualizarListaDeAmigos();

    campoNomeAmigo.focus();
  } else {
    alert("Por favor, insira um nome válido.");
  }
}
