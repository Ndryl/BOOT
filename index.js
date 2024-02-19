document.addEventListener("DOMContentLoaded", function() {
    // Função para gerar um número aleatório entre 1 e 6
    function generateRandomNumber() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    // Função para atualizar a imagem com base no número gerado
    function updateImage(element, randomNumber) {
      element.setAttribute("src", "./images/dice" + randomNumber + ".png");
    }
  
    // Adiciona um evento de clique ao documento
    document.addEventListener("click", function() {
      // Gera números aleatórios para as imagens
      var randomNumber1 = generateRandomNumber();
      var randomNumber2 = generateRandomNumber();
      if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩 Play 1 wins!"
      }
      else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Play 2 wins! 🚩"

      }
      else{
        document.querySelector("h1").textContent = "Draw"

      }

      
      // Atualiza as imagens
      updateImage(document.querySelector(".img1"), randomNumber1);
      updateImage(document.querySelector(".img2"), randomNumber2);
    });
  });
  