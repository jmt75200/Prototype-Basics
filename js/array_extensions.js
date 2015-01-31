// Array Extensions file for Prototype Basics

//toString method
//must take the contents of an array and create a string
Array.prototype.toStrang = function( ) {
      return this.join(", ");
      
};

//forEach method
//must take a function as an argument and call that function against each element in the array
//recommended to use a callback 
    
Array.prototype.eachItem = function( cb ) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
   
};

// //Extra method
// //must take an array function written in ArrayFun and add them to the Array.prototype
    
// Array.prototype.extra = function(first_argument) {
//       // body...
// };
    
