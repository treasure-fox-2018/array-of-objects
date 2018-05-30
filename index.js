var arr = [];
function createObj(name, phase, gender){
  var newObj = {}
  newObj.name = name
  newObj.phase = phase
  newObj.gender = gender
  arr.push(newObj)
  return arr
}
 createObj('Akbar',1,'male')
 createObj('Icha',1,'female')
 createObj('Adhit',2,'male')
 createObj('Rifky',3,'male')

 // console.log(arr)

function getData(name){
  var result
  for(var i = 0; i<arr.length ; i++){
    if(arr[i].name === name){
      result = arr[i]
    }
  }
  return result
}

console.log(getData('Icha'))
