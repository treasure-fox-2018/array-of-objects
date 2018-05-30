var resultArr = []
function createObj (name, phase, gender) {
  var obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  resultArr.push(obj)
  return resultArr
}

function getData (str) {
  for (var a = 0; a < resultArr.length; a++) {
    if (str === resultArr[a].name) {
      return resultArr[a]
    }
  }
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(resultArr)

console.log(getData('Icha'))