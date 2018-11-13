export const FETCH_TODOLIST="FETCH_TODOLIST";

export function fetchTodoList(){
    var request = fetch('https://xzm0v749a7.execute-api.us-east-1.amazonaws.com/default/todoFetchItems',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            crossdomain: true,
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