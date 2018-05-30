var arr = []
function createObj(name, phase, gender){
    var obj = {
        name : name,
        phase : phase,
        gender : gender
    }
    return arr.push(obj)
}

createObj('akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Rifki',3,'male');

console.log(arr)

function getData(name){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'));
