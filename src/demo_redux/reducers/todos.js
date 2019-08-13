//接收旧的state ,action 返回新的action 可以理解为数据流更新的逻辑

const todos =(state = [],action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    ...state,
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo)=>
                (action.id === todo.id) ?
                    {...todo,completed:!todo.completed}
                    :
                    todo   
                )
        default:
            return state;
    }
}

export default todos;