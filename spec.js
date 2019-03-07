var HomePage = function() {
    
  this.homebuttons = element(by.css(".home-hero-btn"));
  this.getstarted = this.homebuttons.all(by.css(".btn.btn-primary")).get(0);
  this.documentation= this.homebuttons.element(by.css(".btn.btn-secondary"));
}


describe('buttons', function() {
  var homePage = new HomePage();
  beforeEach(function() {
      browser.get('https://clarity.design/');
  });
  it('should have a two buttons', function() {
      expect(homePage.getstarted.isPresent()).toBe(true);
      expect(homePage.getstarted.isDisplayed()).toBe(true);
      expect(homePage.documentation.isPresent()).toBe(true);
      expect(homePage.documentation.isDisplayed()).toBe(true)
  });
});


describe('Clarity title', function() {
  it('should have a title', function() {
    browser.get('https://clarity.design/');
    expect(browser.getTitle()).toEqual('Clarity Design System');
  });
});
