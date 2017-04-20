/*jshint esversion: 6 */

let checkForMatch = function(string){

  let tracker = {
    bracket: [],
    brace: [],
    curlyBrace: [],
    carrot: []
  };

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

      tracker.bracket.push('(');
      console.log(tracker.bracket);
  }

  if ( string[i] === bracket2){

      tracker.bracket.pop();
      console.log(tracker.bracket);
  }


}
console.log(tracker.bracket);


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
  if(tracker.bracket.length === 0){
    return true;
  } else{
    return false;
  }

};

module.exports = checkForMatch;

