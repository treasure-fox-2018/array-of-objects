var arr = [];

function createObj (name, phase, gender) {
  var studentObj = {
    name : name,
    phase : phase,
    gender : gender
  }
  return arr.push(studentObj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female'); 
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr)

function getData (name) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
}

console.log (getData('Icha'));