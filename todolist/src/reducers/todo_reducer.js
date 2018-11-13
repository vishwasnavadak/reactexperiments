import FETCH_TODOLIST from './index';

export default function(state={},action) {
    switch(action.type){ 
        case FETCH_TODOLIST:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
