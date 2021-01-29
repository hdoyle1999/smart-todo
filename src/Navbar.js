import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Smart ToDo</h1>
            <div className="links">
                <Link className="todo-link" to='/todo'> ToDo </Link>
                <Link to='/calender'> Calender </Link>
                <Link to='/blogs'> Blogs </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;