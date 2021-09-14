class Person{
    constructor(name){
        this.name = name
    }

    get getName() {
        return this.name
    }

    setAge(age){
        this.age = age
    }

    get getAge(){
        return this.age
    }
}

const p = new Person('Marlon')

console.log(p.getName)