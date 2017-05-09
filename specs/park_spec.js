var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  beforeEach(function(){
    this.park = new Park();
    this.dinosaur = new Dinosaur("T-Rex", 1);
  })

  it("dinosaurs should start empty", function(){
    assert.equal(0, this.park.dinosaurs.length);
  })

  it("can add item to dinosaurs", function(){
    this.park.add(this.dinosaur);
    assert.equal(1, this.park.dinosaurs.length);
  })

})