var resultArr = []
function createObj (name, phase, gender) {
  var obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  resultArr.push(obj)
  return resultArr
}

createObj('Akbar', 1, 'male')
createObj('icha', 1, 'female')
createObj('adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(resultArr)