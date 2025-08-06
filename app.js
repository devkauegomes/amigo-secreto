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

function sortearAmigo() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";

  if (amigos.length === 0) {
    alert("Não é possível sortear. Adicione amigos à lista primeiro!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const elementoResultado = document.querySelector("#resultado");
  elementoResultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
