/*jshint esversion: 6*/

const chai = require("chai");
const expect = chai.expect;
const checkForMatch = require("../app.js");

describe("checkForMatch", function(){

  it("should be a function", function(){
    expect(checkForMatch).to.be.a("function");
  });

  it("check for matching sets of braces in a string",function(){
    //expect(checkForMatch('((yes))')).to.be.equal(true);
    expect(checkForMatch('((nooo)')).to.be.equal(false);
  });

  it.skip ("check for matching sets of brackets & curly brackets in a string",function(){
    expect(checkForMatch('(({[yes]}))')).to.be.equal(true);
    expect(checkForMatch('(({{nooo]])')).to.be.equal(false);
  });

  it.skip ("check for matching sets of brackets & curly brackets in a string",function(){
    expect(checkForMatch('(({[yes]}))')).to.be.equal(true);
    expect(checkForMatch('(({{nooo]])')).to.be.equal(false);
  });

  // checkForMatch('( ( a + b ) / 5 – d ');
  // checkForMatch('[({}[])]'); // true
  // checkForMatch('(((<>[])()))'); // true
  // checkForMatch('( ( a + b ) / 5 – d ');
  // checkForMatch('( ( a + b ) / 5 – d ');

});