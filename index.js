const arr = [];
let createObj = (name ,phase , gender) => {
    arr.push({
        name : name,
        phase : phase,
        gender : gender
    })
}

let peopleFinder = (name => {
    for(let z = 0; z < arr.length; z ++){
        if(arr[z].name === name){
            console.log(arr[z])
        }
    }
})

createObj('mcjibs',4,'bird');
createObj('irtimid',0,'instructor');
createObj('jiggle',2,'hero');

console.log(arr)


peopleFinder('jiggle');