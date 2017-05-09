var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  beforeEach(function(){
    this.park = new Park();
    this.dinosaur = new Dinosaur("T-Rex", 1);
    this.dinosaur2 = new Dinosaur("Raptor", 3);
    this.dinosaur3 = new Dinosaur("Compy", 5);
  })

  it("dinosaurs should start empty", function(){
    assert.equal(0, this.park.dinosaurs.length);
  })

  it("can add dinosaur to dinosaurs", function(){
    this.park.add(this.dinosaur);
    assert.equal(1, this.park.dinosaurs.length);
  })

  it("can remove dinosaur type from dinosaurs", function(){
    this.park.add(this.dinosaur);
    this.park.removeDino("T-Rex");
    assert.equal(0, this.park.dinosaurs.length);
  })

  it("can get all dinosaurs with annualOffspring of more than 2", function(){
    this.park.add(this.dinosaur);
    this.park.add(this.dinosaur2);
    this.park.add(this.dinosaur3);
    var result = this.park.checkRapidBabyMakers();
    assert.equal(2, result);
  })

})