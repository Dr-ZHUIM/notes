# Redux

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

# Redux Example application

Here is a minimal application with `Redux` but without any framework.   
You need to know that `Redux` is normally used by installing the Redux packages from NPM, and the UI is created using a library like `React`.

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
// define an inital state
const initialState = {
    value: 0
    };
```

> `Redux` normally has a `object` as the root piece of the state.

---

### - part. **Action**



---

### - Part. **Reducer**

Secondly , we define a `reducer` function which receives two arguments , the current `state` and an `action` object.   

> When the Redux application starts up , there is not any state yet so we provide the `initialState` as the **default** value for the **first argument** of `reducer`

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

