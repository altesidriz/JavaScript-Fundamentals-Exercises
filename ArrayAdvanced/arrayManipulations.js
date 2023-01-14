function arrayManipulations(input){
    let numbers = input.shift().split(' ').map(Number);
    for (const element of input) {
        let commands = element.split(' ');
        switch (commands[0]){
           // case'Add' : numbers.push(Number(commands[1])); break;
            case'Remove': numbers = numbers.filter(el => el !== commands[2]); break;
        }
    }
    console.log(numbers);
}arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
// switch (el[0]) {
//    case "Add": numbers.push(el[1]);       
//        break;
//    case "Remove": numbers.filter(x=> x != el[1]); 
//        break;
//    case " RemoveAt": 
//    case "Insert" : numbers.fill(el[1],el[2],(el[2]+1));
//    default:
//        break;
//    }