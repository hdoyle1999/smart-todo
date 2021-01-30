import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

const Home = () => {
    return ( 
        <div className="home-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"></link> 

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