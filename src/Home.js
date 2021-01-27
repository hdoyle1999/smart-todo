import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

const Home = () => {
    return ( 
        <div className="home-container">
            <div className="home-container-elements">
                <Login />
            </div>
            <div className="home-container-elements">
                <SignUp />
            </div>
        </div>
     );
}
 
export default Home;