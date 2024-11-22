import routes from '../../src/scripts/routes/routes';
import UrlParser from '../scripts/routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;

    // this._initialAppShell();
  }

  // _initialAppShell() {
  //   DrawerInitiator.init({
  //     content: this._content,
  //   });
  // }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
