class Person{
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age
    };
    name: string;
    age: number;
    showPerson() {
        return `${this.name}的年龄是${this.age}岁`
    }
}

const Tom = new Person("Tom", 22);
const Bom = new Person("Bom", 24);
const Jack = new Person("Jack", 26);

const persons:Person[] = [Tom,Bom,Jack] 