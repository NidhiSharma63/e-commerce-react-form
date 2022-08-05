import React,{useState} from 'react';
import './App.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'

const App = () => {

  const [value, setValue] = useState()

  return (
    <div className='main-wrapper'>
        <div className="wrapper">
          <h1>Create Account</h1>
          <form>
              <div className="input-wrapper">
                <div className="input">
                  <i className="fa-solid fa-user"></i>
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
                   <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    defaultCountry="IN"
                    international={true}
                    error={
                      value ? (isValidPhoneNumber(value) 
                      ? undefined : 'Invalid phone number') 
                      : 'Phone number required'
                    }
                    withCountryCallingCode={true}
                    onChange={setValue}
                    />
                </div>
                { value && isValidPhoneNumber(value) ? <p className='error'>valid</p> : <p className='error'>not valid</p>}
              </div>
              <div className="input-wrapper">
                <div className="input">
                  <i className="fa-solid fa-envelope"></i>
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
                  <i className="fa-solid fa-lock"></i>
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