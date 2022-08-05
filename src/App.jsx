import React,{useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
// import { isValidPhoneNumber,isPossiblePhoneNumber } from 'react-phone-number-input'

const App = () => {

  const [value, setValue] = useState();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password:'',
  //   phone:{value}
  // });
  // const [phoneError, setPhoneError] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  //   console.log(formData);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(value)
  //   // if(!isValidPhoneNumber(value)){
  //   //   setPhoneError(true);
  //   // }
  //   // else{
  //   //   setPhoneError(false);
  //   // }
  //   // alert('Form Submitted');
  // }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='main-wrapper'>
        <div className="wrapper">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-wrapper">
                <div className="input">
                  <i className="fa-solid fa-user"></i>
                  <input 
                    type="text"
                    placeholder="your name"
                    {...register("merchantName", { required: true })} 
                  />
                </div>
                {
                  errors.merchantName && <p className='error'>Enter a your name</p>
                }
              </div>
              <div className="input-wrapper">
                <div className="input">
                   
                </div>
                {/* {
                  errors.merchantPhone && <p className='error'>Enter a valid number</p>
                } */}
              </div>
              <div className="input-wrapper">
                <div className="input">
                  <i className="fa-solid fa-envelope"></i>
                  <input 
                    type="email"
                    placeholder="example@gmail.com"              
                    {...register("merchantEmail", { required: true })} 
                  />
                </div>
                {
                  errors.merchantEmail && <p className='error'>Enter your email</p>
                }
              </div>
              <div className="input-wrapper">
                <div className="input">
                  <i className="fa-solid fa-lock"></i>
                  <input 
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}                   
                    />
                </div>
                {
                  errors.password && <p className='error'>Enter a password</p>
                }
              </div>
              <button type="submit">Create Account</button>
          </form>
        </div>
    </div>
  )
}

export default App;



// error={
                    //   value ? (isValidPhoneNumber(value) 
                    //   ? undefined : 'Invalid phone number') 
                    //   : 'Phone number required'
                    // }


                    // <PhoneInputWithCountry
                    // name="phone"
                    // rules={{ required: true }}
                    // control={register("phone", { required: true })} 
                      // placeholder="Enter phone number"
                      // defaultCountry="IN"
                      // international={true}
                      // withCountryCallingCode={true}
                      // onChange={setValue}
                      // {...register("merchantPhone", { required: true })} 
                      // control={register}
                    // />