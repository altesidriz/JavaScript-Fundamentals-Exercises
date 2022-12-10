function cats (input){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catInfo of input){
        let token = catInfo.split(' ');
        let curCatName = token[0];
        let curCatAge = token[1];
        let currentCat = new Cat(curCatName, curCatAge);
        cats.push(currentCat);
    }

    for(let currentCat of cats){
        currentCat.meow();
    }

}
cats (['Mellow 2', 'Tom 5'])