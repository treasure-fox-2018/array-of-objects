var arr = []

function createObj (name, phase, gender) {
    let nameObj = {}
    nameObj.name = name
    nameObj.phase = phase
    nameObj.gender = gender

    return arr.push(nameObj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Andre', 2, 'male')
createObj('Balanar', 0, 'male')

console.log(arr)

function getData (name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'))
console.log(getData('Balanar'))