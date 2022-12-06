function arrayRotation(array, number){
    
    while(number>0){
        let rotatedElement = array.shift()
        array.push(rotatedElement)
        number--;
    }
    console.log(array.join(" "));
}
arrayRotation([1,2,3,4],3)