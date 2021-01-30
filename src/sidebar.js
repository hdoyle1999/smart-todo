const sidebar = (props) => {
    console.log(props.props);
    return (
        <div >
            <div className="sidebar-content">
                <h1>Your sidebar</h1>
                <p>{props.props} display some silly data here</p>
            </div>
            
        </div>
      );
}
 
export default sidebar;