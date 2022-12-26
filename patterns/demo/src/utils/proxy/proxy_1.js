const person = {
    name: "Tom",
    age: 20,
    gender: "male"
}

const personProxy = new Proxy(person,{
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
      },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
})

personProxy.name;
personProxy.age = 43;