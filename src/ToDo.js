const ToDo = () => {
    return ( 
        <div className="todo" >
            <h1>ToDo Page</h1>
            <div className="page-content">
                <div className="container-content">
                    <div className="todo-container">
                        <h1>From your calender</h1>
                        <p>This will display what is in the calender</p>
                    </div>
                    <div className="todo-container">
                        <h1>From your ToDo</h1>
                        <p> This will display what is on the todo</p>
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
 
export default ToDo;