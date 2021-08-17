export default function showArticle(article) {
  const divContainer = document.querySelector('.div-container');

  function getElement(element) {
    return document.querySelector(element);
  }

  function createElement(type) {
    return document.createElement(type);
  }

  const [articleWrapper, articleContent, articleInfo] = Array.from({ length: 3 }, () => createElement('div'));

  function deleteElement(element) {
    while (element.lastElementChild) element.removeChild(element.lastElementChild);
  }

  function getTitleArticle() {
    const title = article.querySelector('h1');
    return title.innerText;
  }

  function insertElements() {
    divContainer.appendChild(articleWrapper).classList.add('article-wrapper');
    getElement('.article-wrapper').appendChild(articleContent).classList.add('article-content');
    getElement('.article-content').appendChild(articleInfo).classList.add('article-info');
  }

  function getArticleElements(type) {
    const elements = article.querySelectorAll(type);
    const arrayElements = [...elements];
    return arrayElements;
  }

  function insertTextElements() {
    const arrayElements = Array.from(article.all);
    let i;
    for (i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i].localName === 'h1') {
        getElement('.article-info').appendChild(arrayElements[i]);
      } else if (arrayElements[i].localName === 'h2') {
        getElement('.article-info').appendChild(arrayElements[i]);
      } else if (arrayElements[i].localName === 'p') {
        getElement('.article-info').appendChild(arrayElements[i]);
      }
    }
  }

  deleteElement(divContainer);
  insertElements();
  getTitleArticle();
  insertTextElements(getArticleElements('h1'), getArticleElements('p'));
}
