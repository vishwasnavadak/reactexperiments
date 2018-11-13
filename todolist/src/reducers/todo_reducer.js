import _ from 'lodash';

import {FETCH_TODOLIST} from '../actions/index';

export default function(state={},action) {
    switch(action.type){ 
        case FETCH_TODOLIST:
            return _.mapKeys(action.payload,"id");
        default:
            return state;
    }
}
