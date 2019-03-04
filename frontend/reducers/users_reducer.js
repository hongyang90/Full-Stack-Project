import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {} , action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.user);
        default:
            return state;
    }
};


export default usersReducer;