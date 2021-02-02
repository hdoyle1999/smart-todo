import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
// import { firestoreConnect } from 'redux-firestore';
// //import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'

// import { compose } from 'redux';
import firebase from './config/fbConfig';

const ToDo = (props) => {
    // console.log(props);

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("todos");

    function getTodos() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            console.log("items is" , items)
            setTodos(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getTodos();
    }, []);

    if (loading){
        return <h1>Loading...</h1>
    }

    function handleClick(e){
        e.preventDefault();
        console.log("Button Clicked");
    }
    return ( 
        <div className="todo" >
            <div className="page-content">
                <div className="container-content">
                    <h1><u>Your To-Do List</u><Link to='/createToDo' style={{paddingLeft: 13, textDecoration: 'none'}}> + </Link></h1>
                    <div className="vertical-menu">
                        <ul>
                            { 
                                todos.map((todo) => 
                                {
                                    console.log("yup");
                                    console.log(todo);
                                    return (<div key={todo.id}>
                                         <button className="item-button" onClick={handleClick}>
                                        <li>
                                                <h3>{todo.item}</h3>
                                                {todo.where}
                                        </li>
                                        </button>
                                    </div>
                                    )
                                })
                            }
                        </ul> 
                    </div>
                    <div className="vertical-menu">
                        <h1><u>Your Calendar</u></h1>
                        <ul>
                            {props.calendar.map(item => {
                                return (
                                <button className="item-button" onClick={handleClick}>
                                    <li><h3>{item["title"]}</h3>{item["where"] + " " + item["when"]}</li> ;
                                </button>   
                                ) 
                            })}
                        </ul>      
                    </div>
                </div>
                <div className="sidebar">
                    <Sidebar props={123}/>
                </div>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    // console.log("state in todo");
    // console.log(state);
    return {
        todos: state.todo.todos,
        calendar: state.calendar.items
    }
}
export default connect(mapStateToProps)(ToDo);
    // firestoreConnect(() => ['todos']), // or { collection: 'todos' }
    //     connect((state, props) => ({
    //     todos: state.firestore.ordered.todos
    // }))
