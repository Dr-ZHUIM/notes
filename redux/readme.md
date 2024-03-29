<p style="font-size:50px">Part 1 — A Redux App program</p>

# Redux Introduction

## What is Redux ?

`Redux` is a pattern and library for managing and updating application state , using events called `actions`.   
`Redux` serves as a centralized `store` for state

## Why Should I Use Redux ?

`Redux` helps you to manage **`global state`** .

`Redux` is helpful for you to write code which is `predictable` and `testable`.

## When Should I use Redux ?

- You have **large amounts** of application `states` that are needed in many places in the application
- The app state is updated `frequently` over time
- The logic to `update` that state may be `complex`
- The app has a medium or large-sized codebase, and might be worked on by `many people`.

## Redux Libraries and Tools

### React-Redux

`Redux` can integrate with any UI framework, and is most frequently used with React. React-Redux is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

### Redux DevTools Extension​

1. Install `Redux DevTool` in `Chrome Browser`

2. Install library `@redux-devtools/extension`

3. import the library in you `store` as below

    ```
    import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from '@redux-devtools/extension';

    const store = createStore(
        reducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
            // other store enhancers if any
        )
    );
    ```

---

# Redux Basic

## The Redux store

The center of every Redux application is `store` which is a container that holds your application's `global state` .

A `store` is a `object` with a few special function and abilities.

There are some important points here:

- You must **never** directly modify or change the `state` that is kept inside the Redux `store`.
  
- you must create an `action object` with `type` and `argument` (if necessary) , then **dispatch** your `action` to the `store` for updating to the `state`.
  
- When an `action` is **dispatched** , the store runs the root `reducer` function for calculating the `new state` based on the `old state` and the `action`. 
  
- finally the `store` notifies **`subscriber`** that the `state` has been updated then UI will be rerendered by your `framework`.

> Redux only manage State but never render your DOM.

<br/>
<br/>

# Redux Example application

Here is a minimal application with `Redux` but without any framework.   
You need to know that `Redux` is normally used by installing the Redux packages from NPM, and the UI is created using a library like `React`.  
By the way , this example is just a preview of how to use `Redux` but not let you understand the whole library of `Redux` 
 ```
 <!DOCTYPE html>
<html>
  <head>
    <title>Redux basic example</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
  </head>
  <body>
    <div>
      <p>
        Clicked: <span id="value">0</span> times
        <button id="increment">+</button>
        <button id="decrement">-</button>
        <button id="incrementIfOdd">Increment if odd</button>
        <button id="incrementAsync">Increment async</button>
      </p>
    </div>
    <script>
      // Define an initial state value for the app
      const initialState = {
        value: 0
      };

      // Create a "reducer" function that determines what the new state
      // should be when something happens in the app
      function counterReducer(state = initialState, action) {
        // Reducers usually look at the type of action that happened
        // to decide how to update the state
        switch (action.type) {
          case "counter/incremented":
            return { ...state, value: state.value + 1 };
          case "counter/decremented":
            return { ...state, value: state.value - 1 };
          default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state;
        }
      }

      // Create a new Redux store with the `createStore` function,
      // and use the `counterReducer` for the update logic
      const store = Redux.createStore(counterReducer);

      // Our "user interface" is some text in a single HTML element
      const valueEl = document.getElementById("value");

      // Whenever the store state changes, update the UI by
      // reading the latest store state and showing new data
      function render() {
        const state = store.getState();
        valueEl.innerHTML = state.value.toString();
      }

      // Update the UI with the initial data
      render();
      // And subscribe to redraw whenever the data changes in the future
      store.subscribe(render);

      // Handle user inputs by "dispatching" action objects,
      // which should describe "what happened" in the app
      document
        .getElementById("increment")
        .addEventListener("click", function () {
          store.dispatch({ type: "counter/incremented" });
        });

      document
        .getElementById("decrement")
        .addEventListener("click", function () {
          store.dispatch({ type: "counter/decremented" });
        });

      document
        .getElementById("incrementIfOdd")
        .addEventListener("click", function () {
          // We can write logic to decide what to do based on the state
          if (store.getState().value % 2 !== 0) {
            store.dispatch({ type: "counter/incremented" });
          }
        });

      document
        .getElementById("incrementAsync")
        .addEventListener("click", function () {
          // We can also write async logic that interacts with the store
          setTimeout(function () {
            store.dispatch({ type: "counter/incremented" });
          }, 1000);
        });
    </script>
  </body>
</html>

 ```

## State , Actions and Reducers

### - Part. **State**
At first , we define an initial `state` value to describe the application.  
We are tring to track the value of a counter to show how to use `Redux`.

```
// define an initial state
const initialState = {
    value: 0
    };
```

> `Redux` normally has a `object` as the root piece of the state.

---

### - part. **Action**

Secondly,you should define an `action` object.  
`Action` object always have a `type` property , which should be a `string` to act as a unique name for the action.  
Actually, the `type` should be a readable name so that your teammate could understand what it means.  

```
{type : 'counter/incremented'}
```

---

### - Part. **Reducer**

Thirdly , we define a `reducer` function which receives two arguments , the current `state` and an `action` object.   

> When the Redux application starts up , there is not any state yet so we provide the `initialState` as the **default** value for the **first argument** of `reducer`

Based on the `type` of the `action`, you need to return a new object to be the new state, or return the origin state if nothing changed.

```
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
```
---

### - Part. **Store**

Then, we can create a `store` instance by calling an API of the Redux library ,  `createStore`.

We pass our `reducer` function to the store , and generate our initial state . In addition ,
it will calculate any future updates.

```
const store = Redux.createStore(counterReducer);
```

---

### - Part. **UI Rerender**

> Attention! `Redux` cannot rerender the DOM of your application , but it can inform your application to rerender. 

```
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value')

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState()
  valueEl.innerHTML = state.value.toString()
}

// Update the UI with the initial data
render()
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render)
```

Here we write a function render that knows how to get the latest state from the Redux store using the `store.getState()` method , then update the UI to show it.  
Although we have a render function, we still not have a trigger to use our render function.  
`Redux` lets us call `store.subscribe()` and pass our render to it . The callback function will be called everytime the store is updated.  
At here , we can get the latest state and update the UI by the `state`.

---

### - Part. Dispatching Actions

Finally, we need to dispatch `action` object to the `store`. When we use `store.dispatch(action)`, the `store` runs the `reducer` to calculate the updated `state` and runs the `subscriber` to update the UI.

```
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' })
})

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch({ type: 'counter/decremented' })
})

document
  .getElementById('incrementIfOdd')
  .addEventListener('click', function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
      store.dispatch({ type: 'counter/incremented' })
    }
  })

document
  .getElementById('incrementAsync')
  .addEventListener('click', function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
      store.dispatch({ type: 'counter/incremented' })
    }, 1000)
  })
```
---

<br/>
<br/>

# Redux Data Flow

Now, let's summarize the flow of data through a Redux application with this diagram.

- use a event to dispatch your action to store 
- store runs the reducer function by the `type` of action. 
- the store inform your application to get the latest data and your application will rerender the UI at last. 

<br/>

!['redux-data-flow'](redux_data_flow.gif)

---

<br/>
<br/>

<p style="font-size:50px">Part 2 — Concepts and Data Flow</p>

# Introduction 

In this part , we will explain Redux's **concepts** in more details and talk about how data flows through a Redux application.

<br/>
<br/>

# Background Concepts

Before we actually dive into the code, let's talk about those terms and concepts you'll need to know to use Redux.

## State Management

Let's start by learning a React Component which tracks a number in component state.

```
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

This is obviously a self-contained application with the following parts:

- `State` , the source of truth that drives our app;
- `View` , a declarative description of the UI based on the current state;
- `Actions` , he events that occur in the app based on user input, and trigger updates in the state

  **We call this example as `one-way data flow`**

1. State describe the condition of App at a specific point in time .
2. The View is rendered depend on the State.
3. Actions like event will update the State.
4. The View is rendered depend on the new State.

![](one-way-data-flow.png)


However, this simplicity cannot support an application with multiple components that need to share and use the same state, especially if those components are located in different parts of the application. Maybe you can relief this problem to a certain extent by `lifting state up` to parent components , but that doesn't always help. 

One way to solve this is to extract the shared state from the components, and put it into a `centralized location` outside the component tree. Then any component can access the state or trigger action no matter where they are in the tree. 

This is the basic idea behind Redux : a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make your application more predictable.

## Immutability

`Immutability` means something can never be changed.

In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.

Redux expects that all `state` updates are done **immutably** , such as below:

```
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      // look here !
      return { ...state, value: state.value + 1 } // look here !
    default:
      return state
  }
}
```
---

# Redux Terminology
There's some important Redux terms that you'll need to be familiar with before we continue:

## Action

An `action` is a plain JavaScript object that has a `type` property. You can think of an `action` as an event that describes something which happened in the application and a matcher that allow your store to use reducer function.

An `action object` can have other properties with additional information about what happened.
By convention, we call it as `payload`.

A typical `action object` might look as this :

```
const addTodoAction = {
  type : "todos/todoAdded",
  payload : "Buy milk"
}
```

## Reducers

A `reducer` is a function that receives `the current state` and an `action object`, which describes how to update the state if a `action type` was matched. You can think of a `reducer` as an eventListener which handles events depending on the `action type`. 

`reducer` must always follow some specific rules

- They should only calculate the new state value based on the state and action arguments.
- They are not allowed to modify the existing state . Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

Steps :

- Check to see if reducer cares about this action 
  - If so, create a copy of the state, and update the copy with the new value and return it.
  - if not, return the existing state back.

Verson.If
```
const initState = {
    value: 0
};
function counterReducer(state = initState, action) {
    if (action.type === 'counter/incremented') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    return state
}
```

Verson.switch
```
const initState = {
    value: 0
};
function counterReducer(state = initState, action) {
    switch (action.type) {
        case 'counter/incremented': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        default: {
            return state
        }
    }
}
```

## Store

The current Redux application state lives in an object called the `store`.

The store is created by passing a `reducer` to function `configureStore` and has a method called `getState` that return the current `state`.

```
  import {configureStore} from "@reduxjs/toolkit"
  const store = configureStore({reducer:counterReducer});
  const currentState = store.getState();
  console.log(currentState);  //{value:0}
```

## Dispatch
`dispatch` is a method which is the only way to update the `state` by passing in an `action` object. The `store` will run its `reducer` function and save the new `state` value inside, and we can call` getState()` to retrieve the updated `state.`

```
store.dispatch({type:'counter/incremented'});
console.log(store.getState());
// {value: 1}
```

![](./redux_principle.jpg)

## Selectors
`selectors` are functions that know how to extract specific pieces of information from a state value. As an application grows bigger, this can help us avoid repeating logic as different parts of the application.

```
const selectCounterValue = state => state.value;
const currentValue = selectCounterValue(store.getState());
console.log(currentValue)
// 2
```

# Core Concepts and Principles​

Overall, we can summarize the intent behind Redux's design in three core concepts:

## Single Source of Truth
The global state of your application is stored as an object inside a single store. Any given piece of data should only exist in one location.

This will make you easier to debug and inspect your app's state as things change

## State is Read-Only
The only way to update the state is to dispatch an action, and a pure reducer funciton will return a new state or the original state depending on the action.

This is easier to trace why a state update happened.


## Change are Made with Pure Reducer Function

Reducers are pure functions that take the previous state and an action, and return the next state. 

That can make our state read-only.

# Redux Application Data Flow

## Initial State
- A Redux store is created using a root reducer function
- The store calls the root reducer once, and saves the return value as its initial `state`
- When the UI is rendered first, UI Components access the current state of the Redux store, and use that data to decide what to render.

## updates
- A trigger is used
- The app code dispatch an action to Redux store 
- The store runs the reducer function again with the previous state and the current action, and save the return value as the new state.
- The store notifies all parts of the UI that the store has been updated.
- Each UI component that needs data from the store checks to see if a state they need has been changed
- Those UI component who has a needed-state changed will rerender on the screen.

# State

Store has several responsibilities:

- `store.getState()` allows access to the current state
- `store.dispatch(action)` allows state to be updated 
- `store.subscribe(listener)` registers listener callbacks
- `store.unsubscribe()` handles unregistering of listeners returned by `store.subscribe(listener)`

# React + Redux

## react-redux

```
npm install react-redux -D
```

## useSelector

Call the `useSelector` hook to read data in React components.

A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.

```
import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = state => state.todos

const TodoList = () => {
  const todos = useSelector(selectTodos)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
```

## useDispatch

`useDispatch` allows you to dispatch your `action` to store

```
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // And clear out the text input
      setText('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default Header
```

## Provider

Put `<Provider store={store}>` around your entire `<App>` component so that other components can talk to the store


```
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```