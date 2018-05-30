var arr = [];

function createObj(name, phase, gender) {
    let personObj = {};

    personObj['name'] = name;
    personObj['phase'] = phase;
    personObj['gender'] = gender;
    
    arr.push(personObj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');
createObj('David', 1, 'male');

console.log(arr);