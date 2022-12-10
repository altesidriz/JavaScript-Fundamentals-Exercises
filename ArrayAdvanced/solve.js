// function app(){
//     let myArr =['one','two','three','four'];
//    let lengths = myArr.map(x => (x.length));
//     console.log(lengths);
//  }
//  app()

function myTry (array){
    let mySorting = array.map(element => {
        let newElement = ''
        if(element > 0){
            newElement = "positive"; // THIS WILL NOT WORK BRO
        }
        return newElement
    })
 console.log(mySorting.join(" "));    
}
myTry([1, 4, 5, 6, -2, 0])