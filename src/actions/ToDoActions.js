export const createToDo = (todo) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //do some async call to db
        const firestore = getFirestore();
        firestore.collection('todos').add({
            ...todo, 
            ownerID: "yourMa"
        }).then(() => {
            dispatch({type: 'CREATE_TODO', todo}, todo);
        }).catch( (err) => {
            dispatch({type: 'CREATE_ERROR', todo}, err);
        })
        //dispatch action once ready
        
    }
};