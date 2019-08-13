let nextToDoId =1;

export const addTodo = text=>({
    type:'ADD_TODO',
    text,
    id:nextToDoId++
})

export const setVisibilityFilter = filter => ({
    type:'SET_VISIBILITY_FILTER',
    filter
});

export  const toggleTodo = id=>({
    type:'TOGGLE_TODO',
    id,
});

export const VisibilityFliters = {
    SHOW_ALL:'SHOW_All',
    Show_COMPLETE:'Show_COMPLETE',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}