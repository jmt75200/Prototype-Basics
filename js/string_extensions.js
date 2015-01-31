//String Extentions file for Sting Prototypes

// WTF Prototypes
String.prototype.wtf = function( ) {
  return "WTF";
};

//Scramble prototypes
String.prototypes.scramble = function( ){
  var scram = this.split("").sort();
  return scram.join("");
};

//Trim Prototypes
String.prototypes.trim =  function( ){

};