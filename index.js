var arr = []
function createObj(name, phase, gender) {
  let myObj = {
    nama: name,
    phase: phase,
    gender: gender,
  }
  arr.push(myObj)
  return arr
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

function getData(name) {
  var data = arr
  for (var a = 0; a < arr.length; a++) {
    if (arr[a].nama === name) {
      return arr[a]
    }
  }
}

console.log(getData('Icha'))