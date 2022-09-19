# Understanding useMemo and useCallback 

https://www.joshwcomeau.com/react/usememo-and-usecallback/

## `useMemo` 

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

## `useCallback`

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



