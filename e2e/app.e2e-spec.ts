import { AddToCartPage } from './app.po';

describe('add-to-cart App', function() {
  let page: AddToCartPage;

  beforeEach(() => {
    page = new AddToCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
