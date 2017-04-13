import { PwaAmpPage } from './app.po';

describe('pwa-amp App', function() {
  let page: PwaAmpPage;

  beforeEach(() => {
    page = new PwaAmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
