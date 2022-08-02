/*
Objetivo 1: Quando clicar na seta avançar temos que mostrar o próximo cartão da lista.

    - Passo 1: pegar o elemento HTML da seta avançar.

    - Passo 2: identificar o clique do usuário na seta avançar.

    - Passo 3: fazer aparecer o próximo cartão da lista.

    - Passo 4: buscar o cartão que esta selecionado e esconder.
*/

// Passo 1: pegar o elemento HTML da seta voltar.
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  // Passo 4: buscar o cartão que esta selecionado e esconder.
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

// Passo 2: identificar o clique do usuário na seta avançar.
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();
  
  // Passo 3: fazer aparecer o próximo cartão da lista.
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

/*
Objetivo 2: Quando clicar na seta voltar temos que mostrar o cartão anterior da lista.

    - Passo 1: pegar o elemento HTML da seta voltar.

    - Passo 2: identificar o clique do usuário na seta voltar.

    - Passo 3: fazer aparecer o cartão anterior da lista.

    - Passo 4: buscar o cartão que esta selecionado e esconder.
*/
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
