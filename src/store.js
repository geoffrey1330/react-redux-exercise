import { createStore, combineReducers,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/reducer';

const middleware = [thunk]
const initialState = {}
// const store = createStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))

//import stor from './store'

const logger = store => {
  return next =>{
      return action =>{
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          //console.log('[Middleware] next state', stor.getState());
          return result;
      }
  }
};

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducer, composeEnchancers(applyMiddleware(...middleware)));

//export default store


const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;