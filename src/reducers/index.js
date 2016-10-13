import { combineReducers } from 'redux';
import { CHANGENAMESPACE } from '../actions';

function changeNamespace(state = {}, action) {
    switch (action.type) {
        case CHANGENAMESPACE:
            return Object.assign({}, state, {
                currentNamespace: action.text
            })
        default:
            return state;
    }
}

//使用combineReducers 组合多个reducer
const reactTableApp = combineReducers({
    changeNamespace,
});

export default reactTableApp;
