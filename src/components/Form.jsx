import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput,{isValidPhoneNumber} from 'react-phone-number-input';
import { useForm,Controller } from "react-hook-form";

const Form = ({setIsFormSubmitted}) => {

  const { register, handleSubmit, formState: { errors },control,reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
    setIsFormSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input 
                type="text"
                placeholder="your name"
                {...register('merchantName', {
                  required: 'Name must be at least 3 characters',
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters'
                  }
              })}
              />
            </div>
            {
              errors.merchantName && <p className='error'>{errors.merchantName.message}</p>
            }
          </div>
          <div className="input-wrapper">
            <div className="input">
            <Controller
              name="phone-input"
              control={control}
              rules={{
                validate: (value) => isValidPhoneNumber(value),
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  placeholder="your phone number"
                  value={value}
                  onChange={onChange}
                  defaultCountry="IN"
                  id="phone-input"
                />
              )}
            />
            </div>
            {
              errors['phone-input'] && <p className='error'>Enter a valid number</p>
            }
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
  )
}

export default Form;


// {...register("merchantName", 
//                 { required: true })