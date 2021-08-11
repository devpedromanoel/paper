import fetchArticle from './fetch-article.js';

export default function handleInput() {
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  function callFetch(event) {
    event.preventDefault();
    fetchArticle(input.value);
  }

  button.addEventListener('click', callFetch);
}
