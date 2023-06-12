import {legacy_createStore,compose, combineReducers, applyMiddleware} from "redux"
import { authReducer } from "./auth/authReducer";
import thunk from "redux-thunk"
import { appreducer } from "./app/appReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer=combineReducers({
    auth:authReducer,
    app:appreducer
})

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))