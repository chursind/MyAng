import { MyAngPage } from './app.po';

describe('my-ang App', () => {
  let page: MyAngPage;

  beforeEach(() => {
    page = new MyAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
