var arr = []
function createObj (nama, phase, gender) {
  var obj = {};
  obj.nama = nama;
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj);
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr)


function getData (name) {
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i].nama === name) {
      return arr[i];
    }
  }
}

console.log(getData('Akbar'));
console.log(getData('Icha'));
