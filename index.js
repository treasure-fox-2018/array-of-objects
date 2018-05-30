var arr = []

function createObj(name, phase, gender){
	let personObj = {
		name: name,
		phase: phase,
		gender: gender
	}

	return arr.push(personObj);
}

function getData(name){
	for(let a = 0; a < arr.length; a++){
		if(arr[a].name === name){
			return arr[a]
		}
	}
}


createObj('Akbar', 1, 'Male')
createObj('Icha', 2, 'Female')
createObj('Adhit', 1, 'Male')
createObj('Tama', 2, 'Male')
createObj('Rifky', 3, 'Male')

console.log(arr);

console.log(getData('Icha'))