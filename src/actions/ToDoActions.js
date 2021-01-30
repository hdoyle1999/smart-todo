export const createToDo = (todo) => {
    return (dispatch, getState) => {
        //do some async call to db
        dispatch({type: 'CREATE_TODO', todo})
    }
};