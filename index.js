var arr = []
function createObj(name, phase, gender){
    result = {
        name : name,
        phase : phase,
        gender : gender
    }
    arr.push(result)
    return arr
}

createObj("Akbar", 1, "Male")
createObj("Icha", 1, "female")
createObj("Setia", 1, "female")
console.log(arr)

function getData(name){
    let dataFromCreateObj = createObj()
    for(let i=0; i<dataFromCreateObj.length; i++){
        if(dataFromCreateObj[i].name === name){
            return dataFromCreateObj[i]
        }
    }
}

console.log(getData("Icha"))