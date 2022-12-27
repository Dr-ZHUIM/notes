class Dog {
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log("worf!"); ;
    }
}

const dog1 = new Dog("doggie");
const dog2 = new Dog("piggie");
const dog3 = new Dog("chikkie");

Dog.prototype.getName = function(){
    console.log("this dog is called " + this.name)
}

dog1.getName();

class SuperDog extends Dog{
    constructor(name){
        super(name)
    }
    fly(){
        console.log("this dog can fly!");
    }
}

const superdog = new SuperDog("superer");

superdog.fly();
superdog.getName();
superdog.bark();

const doggie = {
    bark(){
        console.log("this dog is barking!");
    }
}

const tom = Object.create(doggie);
tom.bark();
