const person = {
    name: "Tom",
    age: 20,
    gender: "male"
}

const personProxy = new Proxy(person,{
    get: (obj, prop) => {
        if(!obj[prop]){
            throw `Hmm.. ${prop} doesn't seem to exist on the target object`
        }
        console.log(`The value of ${prop} is ${obj[prop]}`);
      },
    set: (obj, prop, value) => {
        if(prop == "age"  && typeof value !== "number"){
            throw `Sorry, you can only pass numeric values for age.`;
        } else if (prop === "name" && value.length < 2){
            throw `You need to provide a valid name.`;
        }
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
})

personProxy.name;
personProxy.age = 43;