export default function fetchArticle(url) {
  function toHTML(textArticle) {
    const parser = new DOMParser();

    const htmlArticle = parser.parseFromString(textArticle, 'text/html');
    return htmlArticle;
  }

  async function getArticle() {
    try {
      const article = await fetch(url);
      const textArticle = await article.text().then((text) => (text));

      toHTML(textArticle);
    } catch (error) {
      console.log(error);
    }
  }

  getArticle();
}
