let tracker = 0;

const callMe = function () {
  tracker += 1;
  console.log(tracker);
  if (tracker === 3) {
    return 'loops';
  }
  return callMe();
};


console.log(callMe());
