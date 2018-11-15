export const ActionTypes = {FETCH_TODOLIST:"FETCH_TODOLIST",
                            ADD_TODO:"ADD_TODO",
                            DELETE_TODO:"DELETE_TODO",
                            UPDATE_TODO:"UPDATE_TODO"};

export function fetchTodoList(){
    var request = fetch('https://xzm0v749a7.execute-api.us-east-1.amazonaws.com/default/todoFetchItems',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '7BAzKhsJHd80OKCUErTSl5jtq9L4lanY6za8dkVnpKX'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error while fetching:', error));
    return ({
        type:ActionTypes.FETCH_TODOLIST,
        payload:request
    })
}
export function addTodo(item,callback){
    var request = fetch(`https://pp0qmqrqt6.execute-api.us-east-1.amazonaws.com/default/todoAddItem?desc=${item}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'FBbnY5sYVG6amtR8Fcz8t8bLS5epGKMN3gRMMkVnIuv'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error while adding:', error));
    return ({
        type:ActionTypes.ADD_TODO,
        payload:request
    })
}
export function deleteTodo(id){
    var request = fetch(`https://ps0cknoeeb.execute-api.us-east-1.amazonaws.com/default/todoDeleteItem?id=${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'CPTN4x3C8m4jCiInMlwGga2ye9lQOTU3BMfEjkVnLvf'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error while deleting:', error));
    return ({
        type:ActionTypes.DELETE_TODO,
        payload:request
    })
}
export function updateTodo(id){
    var request = fetch(`https://d7h55xdv0f.execute-api.us-east-1.amazonaws.com/default/todoUpdateItem?id=${id}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'MMCCg0M7LX9J0bIPxvarw182EZVUvnaMaNWWZkVnNXa'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error while updating:', error));
    return ({
        type:ActionTypes.UPDATE_TODO,
        payload:request
    })
}
