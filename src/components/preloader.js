export default function preloader() {
  window.addEventListener('load', () => {
    document.querySelector('body').classList.add('loaded');
  });
}
