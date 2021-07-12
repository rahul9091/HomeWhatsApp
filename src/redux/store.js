import {createStore} from 'redux'
import msgReducer from "./reducers"

export default createStore(msgReducer)