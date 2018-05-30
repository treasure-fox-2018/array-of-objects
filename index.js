var studentsArr = [];

/**
 * @function printStudentsArr
 * mengembalikan array student
 * @param {object} studentObj input object student yang telah dibuat
 * @returns
**/

function printStudentsArr(studentsArr) {
    console.log(studentsArr);
}

/**     -----------   Release 0   -----------     **/

/**
 * @function inputArrayOfObject
 * fungsi melakukan push object student ke dalam sebuah array
 * @param {object} studentObj input object student yang telah dibuat
 * @returns
**/

function inputArrayOfObject(studentObj) {
    studentsArr.push(studentObj);
}

/**
 * @function createStudentObj
 * fungsi akan melakukan pembuatan object setiap student
 * @param {string} name nama student and @param {integer} phase fase student and @param {string} gender jenis kelamin student
 * @returns {object} mengembalikan nilai berupa array of object (kumpulan object dalam sebuah array)
**/

function createStudentObj(name, phase, gender) {
    let studentDetails = {};

    studentDetails['name'] = name;
    studentDetails['phase'] = phase;
    studentDetails['gender'] = gender;

    inputArrayOfObject(studentDetails);
}

createStudentObj('Haddawi', 20, 'Male');
createStudentObj('Odelia', 20, 'Female');
createStudentObj('Maharama', 20, 'Male');

printStudentsArr(studentsArr);

getData('Odelia');

/**     -----------   Release 1   -----------     **/

function getData(name) {
    for (let i = 0; i < studentsArr.length; i++) {
        if (studentsArr[i]['name'] === name) {
            console.log(studentsArr[i]);
        }
    }
}

















//
