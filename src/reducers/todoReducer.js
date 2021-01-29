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
    return state
}
 
export default todoReducer;