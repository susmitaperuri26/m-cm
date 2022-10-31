import React, { useState } from "react";
import "./Login.css";

function Login({
  setLoggedIn,
  username,
  password,
  email,
  setPassword,
  setUsername,
  setEmail,
}) {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const change = () => {
    setIsLogin((isLogin) => {
      return !isLogin;
    });
  };

  return (
    <div className="containers">
      <div className="contents">
        <h3>{isLogin ? "Login" : "Signup"} And Start Converting</h3>
        <div className="group">
          <label>Email ID:</label>
          <input
            type="text"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            placeholder="test@gmail.com"
          />
        </div>
        <div className="group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        {!isLogin && <div className="group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
            placeholder="susmitha"
          />
        </div>}
        
        <button onClick={login}>{isLogin ? "LOGIN" : "SIGNUP"}</button>
        <a onClick={change}>
          {!isLogin ? "existing user, login!" : "create new user, signup!"}
        </a>
      </div>
    </div>
  );
}

export default Login;
