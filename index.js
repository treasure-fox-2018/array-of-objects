var arr = []
function createObj (name, phase, gender){
  var obj = {
    name: name,
    phase: phase,
    gender: gender
  }

  arr.push(obj)
  return arr
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 1, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

function getData (name){
  for(var i=0; i<arr.length; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
}

console.log(getData("Akbar"))
