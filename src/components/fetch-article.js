import showArticle from './show-article.js';

export default function fetchArticle(url) {
  function toHTML(textArticle) {
    const parser = new DOMParser();

    const htmlArticle = parser.parseFromString(textArticle, 'text/html');
    showArticle(htmlArticle);
    return htmlArticle;
  }

  async function getArticle() {
    try {
      document.querySelector('body').classList.remove('loaded');
      
      const article = await fetch(`https://glacial-headland-22036.herokuapp.com/${url}`);
      const textArticle = await article.text().then((text) => (text));

      return toHTML(textArticle);
    } catch (error) {
      console.log(error);
    }
  }

  getArticle();
}
