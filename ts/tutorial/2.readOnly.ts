/**
 * 2. readonly

  Implement the built-in Readonly<T> generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example:

  interface Todo {
  title: string
  description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property

 */


/* _____________ Your Code Here _____________ */

//keyof means one type of the interface or the typeailas 
type MyreadOnly<T> = {
  readonly [P in keyof T] : T[P]
};

/*_______________   Example Here   _____________________*/

interface Todo {
  title: string
  description: string
  }

const myTodo:MyreadOnly<Todo> = {
  title : 's',
  description: 'a'
}


type Mapish = { [k: string]: boolean };
const a:Mapish = {
  s:true
}
type M = keyof Mapish;