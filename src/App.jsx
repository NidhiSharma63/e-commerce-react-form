import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='main-wrapper'>
        <div className="wrapper">
          <h1>Create Account</h1>
          <form>
              <div className="input-wrapper">
                <div className="input">
                  <i class="fa-solid fa-user"></i>
                  <input 
                    type="text"
                    placeholder="your name"
                    name="name"
                    required
                  />
                </div>
                <p className='error'>Enter your name</p>
              </div>
              <div className="input-wrapper">
                <div className="input">
                  <i class="fa-solid fa-envelope"></i>
                  <input 
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    required
                  />
                </div>
                <p className='error'>Enter your name</p>
              </div>
              <div className="input-wrapper">
                <div className="input">
                  <i class="fa-solid fa-lock"></i>
                  <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                  />
                </div>
                <p className='error'>Enter your name</p>
              </div>
              <button type="submit">Create Account</button>
          </form>
        </div>
    </div>
  )
}

export default App;