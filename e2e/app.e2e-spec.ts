import { AngulardeployPage } from './app.po';

describe('angulardeploy App', function() {
  let page: AngulardeployPage;

  beforeEach(() => {
    page = new AngulardeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
