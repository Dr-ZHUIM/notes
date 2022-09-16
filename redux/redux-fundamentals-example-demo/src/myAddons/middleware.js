//storeAPI will be provided by applyMiddleware and it will be an object with {dispatch , getState}functions
function myMiddleware(storeApi){
  return function wrapDispatch(next){
    return function handleAction(action){
      return next(action)
    }
  }
}

export const myMiddlewareEs6 = storeApi => next => action => {
  console.log('dispatching action :' , action );
  let result = next(action);
  console.log('next State',storeApi.getState());
  return result;
}