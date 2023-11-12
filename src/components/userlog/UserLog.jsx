import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userLog.css";
function UserLog() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    let data = {
      username: username,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    navigate("/");
    
    window.location.reload();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-up</h1>
        <form onSubmit={register} className="form-control">
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign Up
          </button>
        </form>
        <p>
          By signng-in you agree to Amazon's FAKe Clone Condition of use & Sale.
        </p>
        <button type="submit" className="login__regesterButton">
          Create an Amazon account
        </button>
      </div>
    </div>
  );
}

export default UserLog;
