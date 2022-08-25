import { AppPage } from './app.po';
import { browser, logging,by,element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // test for checking base url is redirected to base url or not
  it ('should load a page and verify the url', () => {
    browser.get('/');
    expect(browser.getCurrentUrl())
        .toEqual(browser.baseUrl + '');
  });

  //test for checking todo component is used in app component or not
  it('should contain <app-todo>', () => {
    page.navigateTo();
    expect(page.getTodo).toBeTruthy('<app-todo> should exist in app.component.html');
  });

  // test for checking centred texrt in jumbotron
  it('should display center text',async () => {
    page.navigateTo();
    expect(page.getCenterText).toBeTruthy('<h3> should exist in todo.component.html');
    expect(element(by.css('h3')).getText()).toEqual('Todo app for tracking tasks to be done');
  });

  // test for checking empty input and clicking add
  it('should check empty text in input',async () => {
    page.navigateTo();
    element(by.css('input[type="text"]')).sendKeys("");
    element(by.css('#addbtn')).click();
    expect(element(by.css('.empty-p')).getText()).toBe('Todo tasks List is empty!!!')
  });

  // test for checking after clicking clear
  it('should clear table after clicking clear',async () => {
    page.navigateTo();
    element(by.css('#clear-id')).click();
    expect(element(by.css('.empty-p')).getText()).toBe('Todo tasks List is empty!!!')
  });

  // test to checking after giving text to input 
  it('should create table after adding todo and checking caption',async () => {
    page.navigateTo();
    element(by.css('input[type="text"]')).sendKeys("task1");
    element(by.css('#addbtn')).click();
    expect(element(by.css('caption')).getText()).toBe('Todo Tasks')

  });

    // test for checking button text of Add button
    it('should check text of Add button',async () => {
      page.navigateTo();
      expect(element(by.css('#addbtn')).getText()).toBe('Add')
    });

    // test for checking button text of Clear button
    it('should check text of Clear button',async () => {
      page.navigateTo();
      expect(element(by.css('#clear-id')).getText()).toBe('Clear')
    });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
