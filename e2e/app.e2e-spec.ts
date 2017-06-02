import { HelloNgPage } from './app.po';

describe('hello-ng App', () => {
  let page: HelloNgPage;

  beforeEach(() => {
    page = new HelloNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
