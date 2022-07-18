interface Name {
  name : string
}

interface Man extends Name {
  age:number
}

type Id = {
  id : string
}

type Num = {
  num : number
}

type Account = Id | Num

const tom: Man = { name: 'tom', age: 20 };
const bank:Account = {id:'222',num:222}