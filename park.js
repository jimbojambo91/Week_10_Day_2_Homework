var Park = function(){
  this.dinosaurs = []; 
}

Park.prototype = {
  add: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },
  removeDino: function (name) {
    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.type === name) {
        var index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
      }
    }
  },
  checkRapidBabyMakers: function(){
    var counter = 0;
    for (var dinosaur of this.dinosaurs){
      if(dinosaur.annualOffspring >2 ){
        counter ++;
      }
    }
    return counter;
  }
}
  module.exports = Park;