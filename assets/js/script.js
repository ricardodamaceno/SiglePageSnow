//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
    const preloader = document.getElementById('preloader');
  
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 3000);
  };
  
  const snowContainer = document.getElementById("snow-container");
  
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 e 5 segundos
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Entre 10px e 20px
    snowflake.innerHTML = "★";
    snowContainer.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, 5000); // Remove após 5 segundos
  }
  
  setInterval(createSnowflake, 100); // Cria um floco a cada 100ms

  function copyText() {
    // Pega o campo de texto
    const pixCode = document.getElementById("pixCode");
  
    // Seleciona e copia o texto
    pixCode.select();
    pixCode.setSelectionRange(0, 99999); // Para dispositivos móveis
  
    navigator.clipboard.writeText(pixCode.value)
      .then(() => {
        showPopup();
      })
      .catch((err) => {
        console.error("Erro ao copiar: ", err);
      });
  }
  
  function showPopup() {
    const popup = document.getElementById("popup");
  
    // Mostra o popup adicionando a classe 'show'
    popup.classList.add("show");
  
    // Esconde o popup após 3 segundos
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  }
  
  // Obter a URL atual
const url = new URL(window.location.href);

// Usar URLSearchParams para acessar os parâmetros da URL
const params = new URLSearchParams(url.search);

// Obter o valor do parâmetro 'nome'
const nome = params.get('nome');  // Exemplo: Mariana

// Verificar se o parâmetro 'nome' existe na URL
if (nome) {
  // Atualizar o conteúdo de h1 com o valor do parâmetro
  document.querySelector('.home__title').innerHTML = `Ano Novo,<br />${nome}!`;
} else {
  // Caso o parâmetro 'nome' não exista, manter a saudação padrão
  document.querySelector('.home__title').innerHTML = 'Ano Novo,<br />Pessoa!';
}
