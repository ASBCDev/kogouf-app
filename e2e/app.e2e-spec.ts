import { KogoufAppPage } from './app.po';

describe('kogouf-app App', () => {
  let page: KogoufAppPage;

  beforeEach(() => {
    page = new KogoufAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
