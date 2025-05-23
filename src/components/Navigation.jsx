import { Link, useNavigate } from "react-router-dom";
import "../styles/Navigation.css"
import logo from "../assets/logo-4.png"

function Navigation({isLoggedIn, setIsLoggedIn}) {

  const navigate = useNavigate()
  const username = localStorage.getItem("username");
  
  const logOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false)
    navigate('/');
  }

  return (
    <>
      <nav>
        <div className="left">
            <img src={logo} alt="" />
        </div>

        <div className="right">
          <Link className="link" to={"/"}>Home</Link>
          {!isLoggedIn && <Link className="link" to={"/register"}>Register</Link>}
          {isLoggedIn && <Link className="link" to={"/available-texts"}>Browse Texts</Link>}
          {isLoggedIn && <Link className="link" to={"/texts"}>My Texts</Link>}
          {!isLoggedIn && <Link className="link" to={"/login"}>Login</Link>}
          {isLoggedIn && <Link className="link" to={`/vocabulary`}>Vocabulary</Link>}
          {isLoggedIn && <Link className="link" to={`/profile/${username}`}>Profile</Link>}
          {isLoggedIn && <button onClick={logOut}>Log Out</button>}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
