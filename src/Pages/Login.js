import React, { useState } from 'react';
import '../app.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    if (username === defaultUsername && password === defaultPassword) {
      window.location.href = './home.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username or Email:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
        <div className="options">
          <a href="#">Forgot password?</a>
          <a href="./register.html">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
