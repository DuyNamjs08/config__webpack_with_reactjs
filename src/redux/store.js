import {combineReducers ,createStore , applyMiddleware} from 'redux'
import cartReducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from'redux-devtools-extension'

const rootReducer=combineReducers({
    cartReducer:cartReducer
})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
  
  export default store;
  