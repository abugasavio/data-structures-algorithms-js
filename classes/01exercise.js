function School(classNumber, name) {
  this.what = 'School';
  this.name = name;
  this.classNumber = classNumber;
}

School.prototype.describe = function describe() {
  console.log(this.name, ' with ', this.classNumber, ' classes');
};

const mySchool = new School(16, 'Strath');

mySchool.describe();
