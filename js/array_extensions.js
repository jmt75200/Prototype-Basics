// Array Extensions file for Array 

//toString method
//must take the contents of an array and create a string
Array.prototype.toString = function( someArray ) {
      return someArray.join(',');
};

//forEach method
//must take a function as an argument and call that function against each element in the array
//recommended to use a callback 
    
Array.prototype.eachItem = function(first_argument) {
      // body...
};

//Extra method
//must take an array function written in ArrayFun and add them to the Array.prototype
    
Array.prototype.extra = function(first_argument) {
      // body...
};
    
