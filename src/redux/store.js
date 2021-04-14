import {createStore, combineReducers} from 'redux'
import {reducer as orderReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: orderReducer
})

var devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(rootReducer, devtools)
export default store;