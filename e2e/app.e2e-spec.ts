import { HashtagsPage } from './app.po';

describe('hashtags App', () => {
  let page: HashtagsPage;

  beforeEach(() => {
    page = new HashtagsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
