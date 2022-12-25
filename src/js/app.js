import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener('click', attachArticles());
  
  function attachArticles() {
    for (let i = 0; i < 5; i++) {
      const article = document.createElement('article');
      article.classList.add('message');
      article.textContent = 'sample text';
      document.body.appendChild(article);
    }
  }
});