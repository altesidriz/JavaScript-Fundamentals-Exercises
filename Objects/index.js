function index(){
    let person = { name:'Peter', age:20, height:183 };
    console.log(Object.keys(person));
    console.log(Object.entries(person));
    console.log(Object.values(person));

    let obj = { name:'Peter', age:'18', grade:'5.50' };
    for (let key of Object.keys(obj)) {
         console.log(`${key}: ${obj[key]}`);
        }

}
index()