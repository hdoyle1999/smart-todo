import React from 'react';
import { connect } from 'react-redux';

const handleAdd = () => {
    console.log("Button Clicked fuck yeah");
}

const ToDo = (props) => {
    console.log(props);
    return ( 
        <div className="todo" >
            <div className="page-content">
                <div className="container-content">
                <h1><u>Your To-Do List</u><button onClick={handleAdd}>Add Item</button></h1>
                <div className="vertical-menu">
                    <ul>
                        {props.todos.map(item => {
                            return <li><h3>{item["title"]}</h3>{item["where"]}</li> ;      
                        })}
                    </ul> 
                </div>
                {/* <div className="todo-container">
                    <ul>
                        {props.todos.map(item => {
                            return <li><h3>{item["title"]}</h3>{item["where"]}</li> ;      
                        })}
                    </ul> 
                </div> */}
                <div className="vertical-menu">
                    <h1><u>Your Calendar</u></h1>
                    <ul>
                        {props.calendar.map(item => {
                            return <li><h3>{item["title"]}</h3>{item["where"] + " " + item["when"]}</li> ;      
                        })}
                    </ul>      
                </div>
                </div>
                <div className="sidebar">
                    <h1>Your sidebar</h1>
                    <p>display some silly data here</p>
                </div>
                </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
        calendar: state.calendar.items
    }
}
export default connect(mapStateToProps)(ToDo);