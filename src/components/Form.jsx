import React,{useEffect} from 'react';
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

  useEffect(() => {
    console.log(errors);
    if(errors?.merchantEmail) {
      errors.merchantEmail.ref.parentElement.classList.add('error-border');
    }
    if(errors?.merchantName) {
      errors.merchantName.ref.parentElement.classList.add('error-border');
    }
    if(errors?.password) {
      errors.password.ref.parentElement.classList.add('error-border');
    }
    if(errors?.phoneInput) {
      const phoneInput = document.querySelector('.phone-input');
      phoneInput.classList.add('error-border');
    }
  }, [errors]);

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
                id="meName"
                {...register('merchantName', {
                  required: 'required',
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
            <div className="input phone-input">
            <Controller
              name="phoneInput"
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
              errors['phoneInput'] && <p className='error'>Enter a valid number</p>
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
                {...register('password', {
                  required: 'required',
                  minLength: {
                    value: 8,
                    message: 'password must be at least 8 characters'
                  }
                })}                  
                />
            </div>
            {
              errors.password && <p className='error'>{errors.password.message}</p>
            }
          </div>
          <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default Form;
