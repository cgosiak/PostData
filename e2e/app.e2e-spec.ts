import { NotifierAPIPage } from './app.po';

describe('notifier-api App', function() {
  let page: NotifierAPIPage;

  beforeEach(() => {
    page = new NotifierAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
