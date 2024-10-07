
import React, { useState } from 'react';
 
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleLogin = () => {
    if (email === '123' && password === '123') {
      setIsValid(true);
    } else {
      setErrorMessage('Invalid email or password');
    }
  };
 
  return (
    <div>
      <input type="email" value={email}onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
       <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
       <br/>
      <button onClick={handleLogin}>Login</button>
      <br/>
      {isValid ? (
        <div>
          <img src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg" alt="Valid" />
          <p>Login successful!</p>
        </div>
      ) : (
        <div>
          {errorMessage && (
            <div>
              <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="Error" />
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
 
export default LoginForm