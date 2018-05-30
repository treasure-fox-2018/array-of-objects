var arr = [];

function createObj(nama,fase,kelamin){
  var obj = {};

  obj.name = nama;
  obj.phase = fase;
  obj.gender = kelamin;

  arr.push(obj);
}

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if (name === arr[i].name) {
      return arr[i];
    }
  }
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(getData('Icha'));
console.log(getData('Tama'));
