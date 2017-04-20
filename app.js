/*jshint esversion: 6 */

module.exports = function checkForMatch (string){
  tracker = [];


  const bracket1 = "(";
  const bracket2 = ")";
  const brace1 = "[";
  const brace2 = "]";
  const curlyBrace1 = "{";
  const curlyBrace2 = "}";
  const carrot1 = "<";
  const carrot2 = ">";


  for( bracket1 in str){

      tracker.push("1");
  }

  for(bracket2 in str){

      tracker.pop();
  }

  for( brace1 in str){

      tracker.push("1");
  }

  for(brace2  in str){

      tracker.pop();
  }

  for( curlyBrace1 in str){

      tracker.push("1");
  }

  for(curlyBrace2 in str){

      tracker.pop();
  }

  for(carrot1 in str){

      tracker.push("1");
  }

  for(carrot2 in str){

      tracker.pop();
  }

  if(tracker.length === 0){
    return true;
  } else{
    return false;
  }
};


