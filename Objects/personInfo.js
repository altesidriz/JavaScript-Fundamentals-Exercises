function personInfo(firstName, lastName, age) {
    return {

        firstName: firstName,
        lastName: lastName,
        age: age,
    };
}
console.log(personInfo('Altes', 'Idriz', '32'));

function personInfo2 (firstName, lastName, age){
    return{
        firstName,
        lastName,
        age,
    }
}
let myObject  = personInfo2('Altes', 'Idriz', '32')
console.log(myObject);