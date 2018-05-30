var arr = []

function createObj(name, phase, gender) {

  let obj = {
    name: name,
    phase: phase,
    gender: gender
          }

  arr.push(obj)

  return arr

}
createObj('akbar', 1, 'male');
createObj('icha', 1, 'female');
createObj('andrew', 1, 'male');
createObj('imi', 1, 'female');

function getData(name) {
  var data = arr

  for (var i = 0 ; i < arr.length ; i++){
    if(arr[i].name === name) {
      return arr[i]
    }
  }

}
console.log(getData('icha'));
