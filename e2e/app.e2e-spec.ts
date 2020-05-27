import { PainelCovidPage } from './app.po';

describe('painel-covid App', () => {
  let page: PainelCovidPage;

  beforeEach(() => {
    page = new PainelCovidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
