const initState = {
    todos: [
        {id: 1, title: "Go shopping", where: "SuperValue"},
        {id: 2, title: "Go to bed", where: "Bed"},
        {id: 3, title: "Cook dinner", where: "Kitchen"},
        {id: 4, title: "Go shopping", where: "SuperValue"},
        {id: 5, title: "Go to bed", where: "Bed"},
        {id: 6, title: "Cook dinner", where: "Kitchen"}
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_TODO':     //do this if create_todo is the action that has been recieved, i.e. add to db
            console.log("Created todo", action.todo);
            return state;
        case 'CREATE_ERROR':
            console.log("Todo failed to create", action.err);
            return state;
        default:
            return state;
    }
}
 
export default todoReducer;