import { combineReducers } from 'redux';
import { FILTER, LENGHTMENU,NAMESPACE} from '../actions';

function operation(state = { LENGHTMENU: 10 }, action) {
    switch (action.type) {
        case FILTER:
            return { FILTER: action.text }
        case LENGHTMENU:
            return { LENGHTMENU: action.text }
        default:
            return state;
    }
}

function changeNamespace(state ,action){
    switch (action.type) {
        case NAMESPACE:
            return { NAMESPACE: action.text }
        case LENGHTMENU:
            return { LENGHTMENU: action.text }
        default:
            return state;
    }
}

//使用combineReducers 组合多个reducer
const reactTableApp = combineReducers({
    operation,
})
export default reactTableApp;
