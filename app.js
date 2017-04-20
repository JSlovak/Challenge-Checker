/*jshint esversion: 6 */

let checkForMatch = function(string){
  let bracketTracker = [];
  let braceTracker = [];
  let curlyBraceTracker = [];
  let carrotTracker = [];
  console.log(string);


  let bracket1 = "(";
  let bracket2 = ")";
  let brace1 = "[";
  let brace2 = "]";
  let curlyBrace1 = "{";
  let curlyBrace2 = "}";
  let carrot1 = "<";
  let carrot2 = ">";


for (let i = 0; i< string.length; i++){
  if( string[i] === bracket1){

      bracketTracker.push('(');
      console.log(bracketTracker);
  }

  if ( string[i] === bracket2){

      bracketTracker.pop();
      console.log(bracketTracker);
  }
}
console.log(bracketTracker);


  // for( brace1 in string){

  //     tracker.push("1");
  // }

  // for(brace2  in string){

  //     tracker.pop();
  // }

  // for( curlyBrace1 in string){

  //     tracker.push("1");
  // }

  // for(curlyBrace2 in string){

  //     tracker.pop();
  // }

  // for(carrot1 in string){

  //     tracker.push("1");
  // }

  // for(carrot2 in string){

  //     tracker.pop();
  // }
  if(bracketTracker.length === 0){
    return true;
  } else{
    return false;
  }

};

module.exports = checkForMatch;

