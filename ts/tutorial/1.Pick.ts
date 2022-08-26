/**
 * 1. pick
 * 
 * Implement the built-in Pick<T, K> generic without using it.
 * Constructs a type by picking the set of properties K from T
 * 
    For example:

    interface Todo {
      title: string
      description: string
      completed: boolean
    }

    type TodoPreview = MyPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
 */


/* _____________ Your Code Here _____________ */

//keyof means one type of the interface or the typeailas 
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};

/*_______________   Example Here   _____________________*/

interface User{
  name : string,
  isLogin : boolean,
  id : number
}

type newUser = MyPick<User,'name'|'id'>