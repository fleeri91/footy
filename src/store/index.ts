// ----------------------------------------------------------
// Imports
// ----------------------------------------------------------
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// ----------------------------------------------------------
// Reducers
// ----------------------------------------------------------
import { dataReducer } from './Data/reducer'

const rootReducer = () =>
  combineReducers({
    data: dataReducer,
  });

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(thunk)));
export default store;