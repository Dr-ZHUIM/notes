# Understanding useMemo and useCallback 

https://www.joshwcomeau.com/react/usememo-and-usecallback/

# useMemo

`useMemo` get two arguments :

1. A chunk of work to be performed, wrappered up in a function
2. A list of dependences

The hook `useMemo` allows React check whether useMemo's dependences has been changed since the previous render. If so, React will rerun the supplied function and calculate a new value. Otherwise, it'll skip all that work and reuse the previously-calculated value.

additionally, here are some approaches to solve **heavy computation by rerender** :

1. Lift Content Up
2. Move State Down
3. `useMomo`
4. `React.memo`

here are two problems usually be relevant value to use `useMemo`:

1. heavy computation
2. preserved reference

# useCallback

useCallback serves the same purpose as useMemo, but it's built specifically for functions.

```
// This:
React.useCallback(function helloWorld(){}, []);
// ...Is functionally equivalent to this:
React.useMemo(() => function helloWorld(){}, []);
```

# useReducer

`useReducer` is a React Hook that lets you add a reducer to your component.  

If you have learnt **Redux** , useReducer will be easier for you to understand.

```
const [state,dispatch] = useReducer(reducer,initialArg,init?)
```

## Usage

### Adding a reducer to a component

Firstly, import `useReducer` from React  .
Secondly, create a reducer function with two arguments : state , action  
Thirdly, call `useReducer` in your component and pass your reducer function and state to it.  
Finally, `useReducer` returns an array with exactly two items:

1. The ___`current state`___ of this state variable and initially set to the initail state you provided.
2. The ___`dispatch function`___ that lets you change it in response to interaction.

To update what’s on the screen, call dispatch with an object representing what the user did, called an action:

```
function reducer(state:any,action:{type:string,payload?:any}){
    switch (action.type) {
        case "showbox/increment":
            return {...state,num:state.num + 1}        
        default:
            return state;
    }
}

// bind this funciton to your element and the state managed by reducer will
// compare the action's type , if it's right then state will be updated 
function handleClick() {
    dispatch({ type: 'showbox/increment' });
    }

const [state,dispatch] = useReducer(reducer,{num:0});

```

### Writing the reducer function
Just as `Redux`, a `reducer` function is common to write it as a switch statement. For each case in the switch, you need to calculate and return some next state.

```
function reducer(state:any,action:{type:string,payload?:any}){
    switch (action.type) {
        case "showbox/increment":
            return {...state,num:state.num + 1}        
        default:
            return state;
    }
}
```

Actions can have any shape. By convention, it’s common to pass objects with a type property identifying the action. It should include the minimal necessary information that the reducer needs to compute the next state.

```
 function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }
```

> State is read-only. Don’t modify any objects or arrays in state:
  Instead, always return new objects from your reducer:

```
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ Instead, return a new object
      return {
        ...state,
        age: state.age + 1
      };
    }
```

### Avoiding recreating the initial state

React saves the initial state once and ignores it on the next renders.

Howerver, if your initial state is created by a function, you should pass your function but not the value it returns to the `useReducer`'s third argument.

>Although the result of createInitialState(username) is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.

```
function createInitialState(username) {
  // ...
}
 const [state, dispatch] = useReducer(reducer, username, createInitialState);
```

# useContext

`usecontext` is React Hook that lets you read and subscribe to context from your component.

```
const value = useContext(SomeContext);
```

## Usage

### Passing data deeply into the tree

Call `useContext` at the top level of your component to read and subscribe to your context.

```
import {useContext} from "react"
const theme = useContext(ThemeContext);
```

`useContext` returns the context value for the context you passed . To determine the context value, React searches the component tree and find the closest `context provider` above for that particular context.

To pass context to your component , you should wrap your component into a corresponding provider.

```
function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
```

> If you want to get your context from another file, you should export your context when you are declaring it .

```
import {createContext} from "react"
export const ExampleContext = createContext(null)
<!-- your component -->
```

# ForwardRef

## Usage

### Exposing a DOM node to the parent component

Sometimes it is useful to expose a DOM node to your parent component.

For example: Allowing focus your child component

```

```