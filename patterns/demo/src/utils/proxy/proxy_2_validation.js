const person = {
    name: "Tom",
    age: 20,
    gender: "male"
}

const personProxy = new Proxy(person,{
    get: (obj, prop) => {
        if(!obj[prop]){
            throw new Error(`Hmm.. ${prop} doesn't seem to exist on the target object`) 
        }
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
        return Reflect.get(obj, prop);
      },
    set: (obj, prop, value) => {
        if(prop == "age"  && typeof value !== "number"){
            throw new Error(`Sorry, you can only pass numeric values for age.`) ;
        } else if (prop === "name" && value.length < 2){
            throw new Error(`You need to provide a valid name.`) ;
        }
        console.log(`Changed ${prop} from ${Reflect.get(obj, prop)} to ${value}`);
        return Reflect.set(obj, prop, value);
    }
})

personProxy.name;
personProxy.age = 43;