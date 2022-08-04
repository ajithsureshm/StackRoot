import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { hotelListReducer } from "./Reducers/hotelsReducers";

const reducers = combineReducers({
    hotelsList:hotelListReducer,
})

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))


export default store