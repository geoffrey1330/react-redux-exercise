import { createStore, combineReducers,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/reducer';

const middleware = [thunk]


const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;