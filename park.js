var Park = function(){
  this.dinosaurs = []; 
}

Park.prototype = {
  add: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  }
}
  module.exports = Park;