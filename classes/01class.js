function Building(floors) {
  // this = {};
  this.what = 'building';
  this.floors = floors;
  // return this;
}


Building.prototype.countFloors = function () {
  console.log('I have', this.floors, 'floors');
};

const myBuilding = new Building(4);

console.log(myBuilding);
myBuilding.countFloors();
