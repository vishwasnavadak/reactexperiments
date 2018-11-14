export const FETCH_TODOLIST="FETCH_TODOLIST";
export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const UPDATE_TODO="UPDATE_TODO";

export function fetchTodoList(){
    var request = fetch('https://xzm0v749a7.execute-api.us-east-1.amazonaws.com/default/todoFetchItems',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '7BAzKhsJHd80OKCUErTSl5jtq9L4lanY6za8dpKX'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error:', error));
    return ({
        type:FETCH_TODOLIST,
        payload:request
    })
}
export function addTodo(item){
    console.log("called: "+item);
    var request = fetch('https://pp0qmqrqt6.execute-api.us-east-1.amazonaws.com/default/todoAddItem?desc='+item,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'FBbnY5sYVG6amtR8Fcz8t8bLS5epGKMN3gRMMIuv'
        }
    })
    .catch(error => console.log('Error:', error));
    return ({
        type:ADD_TODO,
        payload:request
    })
}
export function deleteTodo(){
    var request = fetch('https://ps0cknoeeb.execute-api.us-east-1.amazonaws.com/default/todoDeleteItem',{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'CPTN4x3C8m4jCiInMlwGga2ye9lQOTU3BMfEjLvf'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error:', error));
    return ({
        type:FETCH_TODOLIST,
        payload:request
    })
}
export function updateTodo(){
    var request = fetch('https://d7h55xdv0f.execute-api.us-east-1.amazonaws.com/default/todoUpdateItem',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': 'MMCCg0M7LX9J0bIPxvarw182EZVUvnaMaNWWZNXa'
        }
    })
    .then(response => response.json())
    .then((data) => { return data; } )
    .catch(error => console.log('Error:', error));
    return ({
        type:FETCH_TODOLIST,
        payload:request
    })
}