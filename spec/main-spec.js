describe('Array toStrang Prototype: toString', function () {
  
  it("Array.prototype.toStrang must be a function", function() {
     
     // expect(Array.prototype.toStrang).to.be.a('function');
     expect(Array.prototype.toStrang).to.be.a('function'); 
      
  });

  it("Must turn an array into a string ", function() {
       
    var test_array = ["puppy", "kitten", "pandas"];
    var result = test_array.toStrang();
       
    expect(test_array).to.be.an('array');
    expect(test_array).not.to.be.null();
    expect(result).to.have.string("puppy, kitten, pandas");
  });

});//ends the array describe 


describe('Array eachItem Prototype: forEach', function () {
  
  it("Array.eachItem.prototype must be a function", function() {

     expect(Array.prototype.eachItem).to.be.a('function'); 
     
  });

  it("Return eachItem from test_array into result Array", function() {
    
    var test_array = [1,2,3,4];
    var result = [];
    
    //testing for the call back value
    test_array.eachItem(function(value){
      result.push(value);
    });

    expect(test_array).to.be.an('array');

    expect(result).to.eql(test_array);

  });


});//ends the array describe 

// describe('Array Extra Prototype', function () {
  
//   it("Array.Extra.prototype must be a function", function() {
     
//      expect(Array.prototype.extra).to.be.a('function'); 
    
//   });

//   it("Must pass in one argument ", function() {
//      var test_array = [];
//      expect(Array.prototype.extra).to.be.a('function'); 
       
//   });



// });//ends the array describe 

// ------------- [String Prototypes] -------------- //

describe('WTF Prototype', function () {
  
  it("WTF.prototype must be a function", function() {
     
     expect(String.prototype.WTF).to.be.a('function'); 
      
  });

  it("Must return value 'WTF' for any given value ", function() {
       
    var test_array = "squirl";
    var result = test_array.WTF();
       
    expect(test_array).to.be.a('string');
    expect(result).to.equal("WTF");
    });

});//ends the array describe 


describe('String Scramble Prototype', function () {
  
  it("Scramble.prototype must be a function", function() {
     
     expect(String.prototype.scramble).to.be.a('function'); 
     
  });

});//ends the array describe 

describe('String Trim Prototype', function () {
  
  it("String.trim.prototype must be a function", function() {
     
     expect(String.prototype.trim).to.be.a('function'); 
    
  });

  it("Must pass in one string argument ", function() {
    var test_str = " Break Away ";

    expect(test_str).to.be.a('string');
    expect(test_str).to.not.be.null();
       
  });



});//ends the array describe 