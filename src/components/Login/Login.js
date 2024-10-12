

import React, { useState } from "react";
import imgBg from "../../assets/imgs/img-bg.jpg"
import './Login.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(true);
    }
  };

  return (
    <div className="split-screen">
      <div className="left-panel">
        <img src={imgBg} alt="Background" className="background-image" />
      </div>
      <div className="right-panel">
        <div className="login-container">
          <h2>Login</h2>
          <input
          className="input-login"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;