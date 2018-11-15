import _ from 'lodash';

import {ActionTypes} from '../actions/index';

export default function(state={},action) {
    switch(action.type){ 
        case ActionTypes.FETCH_TODOLIST:
            return _.mapKeys(_.orderBy(action.payload,["isCompleted","timestamp"],["asc","desc"]),"id");
        case ActionTypes.ADD_TODO:
            const newState = {...state,[action.payload.id]:action.payload};
            return _.orderBy(newState,["isCompleted","timestamp"],["asc","desc"]); 
        case ActionTypes.DELETE_TODO:
            return _.omit(_.mapKeys(state,"id"),action.payload);
        case ActionTypes.UPDATE_TODO:
            const updatedState = _.map(state,item => {
                if(item.id === action.payload) {
                   return {
                       ...item, 
                       isCompleted:!item.isCompleted
                   }
                }
                return item;
            });
            return _.orderBy(updatedState,["isCompleted","timestamp"],["asc","desc"]);
        default:
            return state;
    }
}
