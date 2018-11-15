import _ from 'lodash';

import {ActionTypes} from '../actions/index';

export default function(state={},action) {
    switch(action.type){ 
        case ActionTypes.FETCH_TODOLIST:
            return _.mapKeys(_.orderBy(action.payload,["isCompleted","timestamp"],["asc","desc"]),"id");
        case ActionTypes.ADD_TODO:
            //TODO adding the new element to state
           /*  console.log(action.payload);
            console.log(state);
            return ({...state,action.payload['id']:{}}); */
            return state;
        case ActionTypes.DELETE_TODO:
            return _.omit(state,action.payload);
        case ActionTypes.UPDATE_TODO:
            const newState = _.map(state,item => {
                if(item.id === action.payload) {
                   return {
                       ...item, 
                       isCompleted:!item.isCompleted
                   }
                }
                return item;
            })
            return _.orderBy(newState,["isCompleted","timestamp"],["asc","desc"]);
        default:
            return state;
    }
}
