import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk];

export default function configureStore() {
    return createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
}