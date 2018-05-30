var arr = [];
function createObj(name, phase, gender) {
  var objStudent = {};
  objStudent.name = name;
  objStudent.phase = phase;
  objStudent.gender = gender;
  arr.push(objStudent)
  return arr;
}

createObj("Akbar", 1, "Female");
createObj("Hani", 10, "male");
createObj("jamiah", 3, "Female");
createObj("Icha", 19, "Female");

console.log(arr);

function getData(name) {
  for (var j = 0; j < arr.length; j++) {
    var arrNameAccess = arr[j].name;
    if (arrNameAccess === name) {
      return arr[j];
    }
  }
  return "Data Not Found";
}

console.log(getData("Icha"));
