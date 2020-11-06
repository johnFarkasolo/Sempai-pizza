import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

console.log(composeEnhancers)

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export default store;