import { BoticPrototypePage } from './app.po';

describe('botic-prototype App', function() {
  let page: BoticPrototypePage;

  beforeEach(() => {
    page = new BoticPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
