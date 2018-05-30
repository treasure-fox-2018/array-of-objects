var arr = [];

function createObj(name, phase, gender){
    let obj = {}
        obj.name = name
        obj.phase = phase
        obj.gender = gender
    arr.push(obj)
}

createObj('akbar', 1, 'male')
createObj('icha', 1, 'female')

//console.log(arr);

function getData (name){
    arr.forEach(people => {
       if(people.name === name){
           console.log(people)      
           return people;
       } 
    })
}

console.log(getData('icha'))