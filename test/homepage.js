var assert = require('assert');

describe('Login | Lionstep', function(){
    it('should have the right title', function(){
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Login | Lionstep');
    });
    it('should have a link to the Dashboard page', function (){
       // browser.url('/');
        var hasApiLink = browser.isExisting('//p[text()="Sign into your account"]')
        browser.setValue("//*[@name = 'email']",'horgosdumitru+441@gmail.com')
        browser.setValue("//*[@name = 'password']", '123456')
        browser.click("//*[@type = 'submit']")
        
       var title = browser.getTitle();
       assert(hasApiLink);
       assert.equal(title, 'Login | Lionstep');
       
    });
     it('should take you to the Potential candidates first job', function (){
        //browser.url('/');
        browser.pause(10000);
        browser.click('//*[@id="5751016104394752"]/div[1]/div[2]/a[2]')
        browser.pause(5000);

        var title = browser.getTitle();
        assert.equal(title, 'Talents | Lionstep');
    });
    it('should click check interest on the first candidate', function (){
        //browser.url('/');
        browser.click('//*[@id="5f3bb78fa1c63f46"]/div/div[3]/div[4]/button')
        browser.pause(5000);

        var title = browser.getTitle();
        assert.equal(title, 'Talents | Lionstep');
    });

});