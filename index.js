document.addEventListener("DOMContentLoaded", function () {
    const sentences = ["Web Application Developer", "Application Developer", "Web Developer", "UI Designer"];
    const textElement = document.querySelector(".animate-text");
    let currentSentenceIndex = 0;
  
    function changeSentence() {
      textElement.style.opacity = 0;
      setTimeout(() => {
        textElement.textContent = sentences[currentSentenceIndex];
        textElement.style.opacity = 1;
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
      }, 1000);
    }
  
    setInterval(changeSentence, 3000);
    changeSentence();
  });
  