import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';

const Login = ({ submitFrom }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(sumitForm, validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1> Login </h1>
                <div className='form-inputs'>
                    <label 
                    htmlFor='email' className='form-label'>Email</label>
                    <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email address'
                    value={ values.email }
                    onChange={ handleChange }
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='password' className='form-label'>Email</label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password'
                    value={ values.password }
                    onChange={ handleChange }
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='password2' className='form-label'>Confirm Password</label>
                    <input id='password2' type='password2' name='password2' className='form-input' placeholder='Confirm your password'
                    value={ values.password2 }
                    onChange={ handleChange }
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
            </form>
        </div>
    )
}

export default Login
