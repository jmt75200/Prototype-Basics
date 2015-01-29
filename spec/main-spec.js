describe('Array toString Prototype', function () {
  
  it("Array toString.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.toString).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });

  it("Array toString.prototype must be a function", function() {
       // expect( Array.prototype.toString ).to.be.a('function');
       expect(Array.prototype.toString).to.be.instanceOf(Function); 
       // expect(true).to.be.equal(true);  
    });

});//ends the array describe 


describe('Array forEach Prototype', function () {
  
  it("Array.forEach.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.eachItem).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });

});//ends the array describe 

describe('Array Extra Prototype', function () {
  
  it("Array.Extra.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.eachItem).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });

});//ends the array describe 

