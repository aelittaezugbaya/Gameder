describe('Discovery page tests', function() {
  beforeAll(function(done) {
    browser
      .url('/')
      .windowHandleSize({ width: 1200, height: 800 })
      .call(done);
  });
  describe('Browser get information about profile', function() {
    it('browser get username', function(done) {
      let username = browser.getText('.username');
      expect(username=='undefined')
        .toBe(false);
      browser.call(done);
    });
    it('browser get username', function(done) {
      let img = browser.getAttribute('img','src');
      expect(img==='underfined')
        .toBe(false);
      browser.call(done);
    });

  });
  describe('"Gameder"logo appears in the top', function() {
    it('should display an Gameder', function(done) {
      browser
        .waitForExist('.logo');

      expect(browser.getText('.logo'))
        .toBe('Gameder');

      browser.call(done);
    });
  });
  describe('Picture should have username', function() {
    it('Username is under picture', function(done) {
      browser
        .waitForExist('.username');

      let username = browser.getText('.username').substring(10);

      expect(browser.getText('.username').length)
        .toBeGreaterThan(0);

      browser.call(done);
    });
  });

  describe('Actions after click on "Yes" or "No"', function() {
    it('After pressing "Yes" another username is showed', function(done) {
      browser
        .waitForExist('.username');

      let usernameBefore = browser.getText('.username').substring(10);
      browser.click(".yes");
      let usernameAfter = browser.getText('.username').substring(10);

      expect(usernameBefore === usernameAfter)
        .toBe(false);

      browser.call(done);
    });
    it('After pressing "No" another username is showed', function(done) {
      browser
        .waitForExist('.username');

      let usernameBefore = browser.getText('.username').substring(10);
      browser.click(".no");
      let usernameAfter = browser.getText('.username').substring(10);

      expect(usernameBefore === usernameAfter)
        .toBe(false);

      browser.call(done);
    });

    // it('Right username with img', function(done) {
    //   browser
    //     .waitForExist('.username');
    //
    //   let username = browser.getText('.username').substring(10);
    //   let img = browser.getAttribute('img','src');
    //   console.log(img);
    //   if(username=='A Little Pony'){
    //     expect(img)
    //       .toBe("http://cartoonbros.com/wp-content/uploads/2016/04/My-Little-Pony-9.png");
    //   }else if(username == 'Another Little Pony'){
    //     expect(img)
    //       .toBe("http://cartoonbros.com/wp-content/uploads/2016/04/My-Little-Pony-10.png");
    //   }else if(username== 'Yet Another Little Pony'){
    //     expect(img)
    //       .toBe("http://cartoonbros.com/wp-content/uploads/2016/04/My-Little-Pony-11.png");
    //   }
    //
    //   browser.call(done);
    // });
    it('After pressing "Yes" another img is showed', function(done) {
      browser
        .waitForExist('.username');

      let imgBefore = browser.getAttribute('img','src');
      browser.click(".yes");
      let imgAfter = browser.getAttribute('img','src');

      expect(imgBefore === imgAfter)
        .toBe(false);

      browser.call(done);
    });
    it('After pressing "No" another img is showed', function(done) {
      browser
        .waitForExist('.username');

      let imgBefore = browser.getAttribute('img','src');
      browser.click(".no");
      let imgAfter = browser.getAttribute('img','src');

      expect(imgBefore === imgAfter)
        .toBe(false);

      browser.call(done);
    });
  });

});
