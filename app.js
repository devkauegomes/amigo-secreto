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

function atualizarListaDeAmigos() {
  const lista = document.querySelector("#listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}
