let arr = [];

function createObj(name, phase, gender) {
  let obj = { name, phase, gender };
  arr.push(obj);
}

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    if (person.name.toLowerCase() === name.toLowerCase()) {
      return person;
    }
  }
  return 'Data not found'
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(arr)

console.log(getData('Icha'));
console.log(getData('Bob'));
