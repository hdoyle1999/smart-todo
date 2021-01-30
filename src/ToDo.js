import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import CreateToDo from './CreateToDo';

const ToDo = (props) => {
    console.log(props);
    return ( 
        <div className="todo" >
            <div className="page-content">
                <div className="container-content">
                    <h1><u>Your To-Do List</u><Link to='/createToDo' style={{paddingLeft: 13, textDecoration: 'none'}}> + </Link></h1>
                    <div className="vertical-menu">
                        <ul>
                            {props.todos.map(item => {
                                return <li><h3>{item["title"]}</h3>{item["where"]}</li> ;      
                            })}
                        </ul> 
                    </div>
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
                    <Sidebar props={123}/>
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