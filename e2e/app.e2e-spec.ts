import { DatatabletestPage } from './app.po';

describe('datatabletest App', () => {
  let page: DatatabletestPage;

  beforeEach(() => {
    page = new DatatabletestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
