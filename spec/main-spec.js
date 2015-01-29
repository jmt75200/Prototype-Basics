describe('Array toString Prototype', function () {
  
  it("Array toString.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.toString).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });

  it("Must pass in one argument ", function() {
       // expect( Array.prototype.toString ).to.be.a('function');
       var test_array = ["puppy", "kitten", "pandas"];
       expect(test_array).to.be.an('array');
       expect(test_array).not.to.be.null();
    });

  it("Result must be a string", function() {
         // expect( Array.prototype.toString ).to.be.a('function');
         var result = '"puppy", "kitten", "pandas"';
         
         expect(result).to.be.an('string');
         expect(result).not.to.be.null();
      });

});//ends the array describe 


describe('Array forEach Prototype', function () {
  
  it("Array.forEach.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.eachItem).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });

  // it("Must pass in one argument", function() {
  //      // expect( Array.prototype.toString ).to.be.a('function');
  //      var test_array = ["puppy", "kitten", "pandas"];
       
  //      expect(test_array).to.be.an('array');
  //      expect(test_array).not.to.be.null();

  //   });

});//ends the array describe 

describe('Array Extra Prototype', function () {
  
  it("Array.Extra.prototype must be a function", function() {
     // expect( Array.prototype.toString ).to.be.a('function');
     expect(Array.prototype.extra).to.be.a('function'); 
     // expect(true).to.be.equal(true);  
  });



});//ends the array describe 

