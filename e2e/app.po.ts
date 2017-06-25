import { browser, by, element } from 'protractor';

export class M2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('syd-root h1')).getText();
  }
}
