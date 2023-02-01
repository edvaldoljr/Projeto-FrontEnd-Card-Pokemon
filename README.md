# Projeto Card Pokémon

![](https://github.com/edvaldoljr/Projeto-FrontEnd-Card-Pokemon/blob/main/src/img/img-projeto.gif?raw=true)

Bem-vindo à nossa aplicação de visualização de Pokémon! Aqui, você pode navegar por uma lista dos seus personagens favoritos e ver suas informações detalhadas, incluindo imagens e estatísticas. Com as setas de navegação, você pode avançar e voltar para ver cada cartão de Pokémon, tornando fácil encontrar exatamente o que você está procurando. Não importa se você é fã de longa data ou está apenas começando a explorar o mundo Pokémon, nossa aplicação é a escolha perfeita para todos os fãs da série. Então, comece a explorar hoje e descubra seu próximo Pokémon favorito!

## Para desenvolver o projeto, você precisará de:

- Conhecimento básico em HTML, CSS e JavaScript.
- Um editor de código, como o Visual Studio Code ou o Sublime Text.
- Conhecimento básico em manipulação de elementos do DOM (Document Object Model) usando JavaScript.
- Conhecimento sobre eventos do JavaScript, como o "click".
- Uma boa compreensão de como funciona a adição e remoção de classes CSS usando JavaScript.
- Conhecimento básico sobre como funcionam os loops e condicionais do JavaScript.
- Conhecimento básico sobre a manipulação de arrays no JavaScript.
- Um browser web para testar a aplicação.

Com esses requisitos, você estará preparado para começar a desenvolver a aplicação.

# **Desenvolvimento:**

## index.html

Este é um modelo HTML5 básico para um projeto sobre Pokémon. Ele inclui links para o Google Fonts e arquivos CSS locais, bem como um cabeçalho HTML, seção principal e algumas imagens. A seção principal contém um controle deslizante com informações e imagens de três Pokémon: Pikachu, Charizard e Mewtwo. Cada Pokémon tem sua própria descrição com um nome, um valor HP e uma imagem.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projeto Pokémon</title>

    <link rel="shortcut icon" href="src/img/pokebola.png" type="image/x-icon" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit&family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="src/css/reset.css" />
    <link rel="stylesheet" href="src/css/style.css" />
    <link rel="stylesheet" href="src/css/responsivo.css" />
  </head>
  <body>
    <header class="cabecalho">
      <img src="src/img/pokebola.png" alt="Pokebola" class="pokebola" />
      <h1 class="titulo">MapaDev Week</h1>
    </header>
    <main class="pokemon-slider">
      <button class="btn-seta btn-voltar" id="btn-voltar">
        <img src="src/img/seta.png" alt="seta voltar" />
      </button>

      <ul class="lista-pokemons">
        <li class="cartao selecionado fundo-1">
          <div class="informacoes">
            <h2 class="nome">Pikachu</h2>
            <p class="vida">HP 300</p>
          </div>

          <div class="container-imagem">
            <img
              src="src/img/pikachu.png"
              alt="pikachu"
              class="imagem-pokemon"
            />
          </div>

          <div class="descricao">
            <h3 class="titulo">Descrição</h3>
            <p class="texto">
              Os Pikachus são pequenos roedores de quarenta centímetros e de
              seis quilogramas, com um corpo redondo, pernas curtas e uma longa
              cauda, quando macho, a cauda tem um formato de um raio, mas se o
              Pikachu for fêmea sua cauda ganha um coração na ponta.
            </p>
          </div>
        </li>

        <li class="cartao fundo-2">
          <div class="informacoes">
            <h2 class="nome">Charizard</h2>
            <p class="vida">HP 800</p>
          </div>

          <div class="container-imagem">
            <img
              src="src/img/charizard.png"
              alt="charizard"
              class="imagem-pokemon"
            />
          </div>

          <div class="descricao">
            <h3 class="titulo">Descrição</h3>
            <p class="texto">
              Geralmente, um Charizard é competitivo. Ele adora a batalha e seu
              espírito competitivo também é notável, uma vez que nunca vau
              cuspir fogo em um inimigo mais fraco a menos que provocado ou
              ordenado. Quando fica muito irritado, as chamas em sua cauda se
              tornam branco-azuladas.
            </p>
          </div>
        </li>

        <li class="cartao fundo-3">
          <div class="informacoes">
            <h2 class="nome">Mewtwo</h2>
            <p class="vida">HP 1200</p>
          </div>

          <div class="container-imagem">
            <img src="src/img/mewtwo.png" alt="mewtwo" class="imagem-pokemon" />
          </div>

          <div class="descricao">
            <h3 class="titulo">Descrição</h3>
            <p class="texto">
              Mewtwo foi criado geneticamente em uma laboratório, sendo um
              clcone do misterioso antigo Pokémon Mew. É uma criatura com uma
              postura humanóide, mas tem algumas características felinas.
            </p>
          </div>
        </li>
      </ul>

      <button class="btn-seta" id="btn-avancar">
        <img src="src/img/seta.png" alt="seta avançar" />
      </button>
    </main>
    <script src="src/js/index.js"></script>
  </body>
</html>

```

## reset.css

Este é o código CSS que define estilos padrão para elementos HTML.

O primeiro bloco de código define estilos padrão para todos os elementos na página:

- margin: 0 define a margem (espaço fora de um elemento) como 0.
- padding: 0: 0 define o preenchimento (espaço dentro de um elemento) como 0.
- box-sizing: border-box define o tamanho de um elemento para incluir qualquer borda e preenchimento na largura e altura totais de um elemento.

O segundo bloco define estilos especificamente para elementos de lista não <ul> ordenados:

- list-style: nenhum remove os marcadores de lista padrão de itens de lista não ordenados.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}
```

## style.css

Esta é uma folha de estilo CSS para uma página da Web. Ele define a família de fontes, a imagem de fundo, os estilos de exibição, as dimensões, as cores, etc. para vários elementos, como o cabeçalho, o controle deslizante de pokémons, botões, cartões e elementos de informação. Ele também define transições, sombras e radios de borda para certos elementos.

```css
body {
    /* Imporando fonts */
    font-family: 'Outfit',
    sans-serif;
    /* Imagem fundo */
    background-image: url(../img/fundo-site.png);
    /* Não repetir a imamgem */
    background-repeat: no-repeat;
    /* Cobrir toda a tela */
    background-size: cover;
    /* Alura minima */
    min-height: 100vh;
}

.cabecalho {
    /* Colocar os elementos um ao lado do outro de uma forma mais facil */
    display: flex;
    /* Centralizar Horizontal */
    justify-content: center;
    /* Alinhando itens */
    align-items: center;
    /* Espaçamento entre elementos */
    gap: 15px;
    padding-top: 50px;
    
}

.cabecalho .titulo {
    color: #f1ecff;
}

.cabecalho .pokebola {
    /* Altura */
    width: 30px;
    /* largura */
    height: 30px;
}

.pokemon-slider {
    display: flex;
    /* Alinhando itens */
    align-items: center;
    /* Centralizar Horizontal */
    justify-content: center;
    gap: 80px;
    margin: 60px 0;
    
}

.lista-pokemons {
    /* Largura */
    width: 310px;
    /* Altura */
    height: 520px;
    position: relative;
}

.btn-seta {
   background-color: #f1ecff;
   /* largura  */
   width: 70px;
   /* altura */
   height: 70px;
   border-radius: 50px;
   border: 0;
   cursor: pointer;
   transition: background-color 0.3s ease-in-out;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.btn-seta.btn-voltar {
    /* Girando a seta a 180graus */
    transform: rotateY(180deg);
}

/* Passar o mause em cima */
.btn-seta:hover {
    background-color: #6182a0;
}

.cartao {
    background-color: antiquewhite;
    /* Ocupar todo o tamanho da ul */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    padding: 12px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: opacity 0.3s ease-in-out;
}

.cartao.selecionado {
    opacity: 1;
    z-index: 1;
}

.fundo-1 {
    background: url(../img/fundo-card-1.jpg) no-repeat;
}

.fundo-2 {
    background: url(../img/fundo-card-2.jpg) no-repeat;
}

.fundo-3 {
    background: url(../img/fundo-card-3.jpg) no-repeat;
}

.cartao .informacoes {
    background-color: rgba(179, 177, 185, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 8px 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.cartao .informacoes .nome {
    color: #f1ecff;
    font-size: 22px;
    
}

.cartao .informacoes .vida {
    background-color: #333;
    color: #f1ecff;
    border-radius: 20px;
    padding: 6px 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.cartao .container-imagem {
    text-align: center;
}

.cartao .imagem-pokemon {
    max-width: 100%;
    max-height: 280px;
    padding: 20px;
}

.cartao .descricao {
    background-color: rgba(255, 255, 255, 0.6);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 11px ;
    border-top-right-radius: 11px ;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.cartao .descricao .titulo {
    border-top-left-radius: 10px ;
    border-top-right-radius: 10px ;
    background-color: #333;
    color: #f1ecff;
    font-size: 15px;
    padding: 12px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.cartao .descricao .texto {
    font-size: 14px;
    padding: 12px;
    text-align: justify;
    max-height: 115px;
    overflow-y: auto ;
}
```

## responsivo.css

Esta é uma consulta de mídia CSS que altera os estilos dos elementos HTML com a classe "pokemon-slider", "btn-seta", "lista-pokemons", "cartao" e seus descendentes "imagem-pokemon" e "informacoes" e seu descendente "nome" e "vida", quando a largura do visor é menor ou igual a 620 pixels.

Os estilos alteram os preenchimentos, lacunas, largura, altura, tamanhos de fonte, exibição, conteúdo justificado, itens de alinhamento e largura máxima dos elementos. Esses estilos são aplicados para fornecer um design melhor responsivo para telas menores.

```css
@media (max-width: 620px) {
    .pokemon-slider {
        padding: 0 15px;
        gap: 10px;
    }

    .btn-seta {
        width: 20px;
        height: 20px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lista-pokemons {
        height: 480px;
    }

    .cartao .imagem-pokemon {
        max-width: 230px;
    }

    .cartao .informacoes .nome {
        max-width: 50%;
        font-size: 18px;
    }

    .cartao .informacoes .vida {
        font-size: 14px;
    }
}
```

## index.js

Este é o código JavaScript para um documento HTML que implementa um carrossel de cartões. O código faz o seguinte:

- Ele seleciona os botões "Next" e "Back" do documento HTML usando o método document.getElementById() e o método document.querySelectorAll(), respectivamente.

- Ele adiciona ouvintes de eventos aos botões "Next" e "Back" para ouvir os cliques do usuário.

- Quando o usuário clica no botão "Next", ele encontra o cartão selecionado no momento usando o método document.querySelector() e remove a classe "selected" dele, incrementa o índice do cartão atual e adiciona a classe "selected" ao próximo cartão.

- Quando o usuário clica no botão "Voltar", ele encontra o cartão selecionado no momento usando o método document.querySelector() e remove a classe "selected" dele, em seguida, diminui o índice do cartão atual e adiciona a classe "selected" ao cartão anterior.

  

```javascript
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

```



## Hospedagem: 

A nossa aplicação está atualmente hospedada no GitPages, um serviço de hospedagem de páginas da web baseado em Git. Com ele, é possível publicar facilmente seus projetos e torná-los acessíveis ao público com apenas alguns cliques. Além disso, o GitPages oferece uma plataforma estável e confiável para que você possa ter certeza de que sua aplicação estará sempre disponível para seus usuários. Não perca mais tempo e experimente!

## Acesso o Link e confira:

https://edvaldoljr.github.io/Projeto-FrontEnd-Card-Pokemon/

# ⭐️ **Deixe um Star** ⭐️

Obrigado por conferir meu repository! É muito gratificante saber que alguém está interessado no meu trabalho. Se você gostou do que viu, deixar um star seria uma grande ajuda no meu crescimento e me motivaria a continuar fazendo projetos. O apoio de pessoas como você é fundamental para que eu possa seguir evoluindo e produzindo conteúdos cada vez melhores. Obrigado mais uma vez e espero que você possa acompanhar meus futuros projetos!
