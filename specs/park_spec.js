var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  beforeEach(function(){
    this.park = new Park();
    this.dinosaur = new Dinosaur("T-Rex", 1);
  })