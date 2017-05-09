var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  beforeEach(function() {
    this.dinosaur = new Dinosaur("T-rex", 1);
  });

  it("should have type", function(){
    assert.equal("T-rex", this.dinosaur.type);
  });

  it("should have offspring per year", function(){
    assert.equal(1, this.dinosaur.annualOffspring);
  });

})