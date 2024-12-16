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
    snowflake.innerHTML = "❄";
    snowContainer.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, 5000); // Remove após 5 segundos
  }
  
  setInterval(createSnowflake, 100); // Cria um floco a cada 100ms
  