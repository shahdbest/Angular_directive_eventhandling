import { browser, by, element,ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getTodo():ElementFinder{
    return element(by.tagName('<app-todo>'));
  }
  getCenterText():ElementFinder{
    return element(by.css('h3'));
  }
}
