var arr = []
function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  
  arr.push(obj)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
// console.log(arr)

function getData(name) {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a].name === name) {
      return arr[a]
    }
  }
}
console.log(getData('Icha'))
console.log(getData('Tama'))
