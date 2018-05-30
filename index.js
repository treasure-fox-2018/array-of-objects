const arr = [];

//Release 0 - Create array of Objects
function createObj(name, phase, gender) {
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj);
}

//Sample data for Release 0
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifki', 3, 'male');

//Release 1 - Get Data from array of objects
function getData (name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
  return 'Person does not exist';
}

console.log(getData('Icha'));
// { name: 'Icha', phase: 1, gender: 'female' }

console.log(getData('abc'));
// Person does not exist
