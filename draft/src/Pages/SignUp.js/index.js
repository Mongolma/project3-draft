import React from 'react'

const SignUp = () => {
    return (
        <div className='form-content-right'>
          <form className='form'>
            <h1>Get started with us today! Create your account by filling out the information below.</h1>
            <div className='form-inputs'>
              <label
               htmlFor='username' 
               className='form-label'>
               Username
              </label>
              <input 
                id='username'
                type='text' 
                name='username' 
                className='form-input'
                placeholder='Enter your username'
                 />
            </div>
            <div className='form-inputs'>
              <label
               htmlFor='email' 
               className='form-label'>
                Email
              </label>
              <input 
                id='email'
                type='email' 
                name='email' 
                className='form-input'
                placeholder='Enter your email address'
                 />
            </div>
            <div className='form-inputs'>
              <label
               htmlFor='password' 
               className='form-label'>
                Password
              </label>
              <input 
                id='password'
                type='password' 
                name='password' 
                className='form-input'
                placeholder='Password'
                 />
            </div>
            <div className='form-inputs'>
              <label
               htmlFor='password2' 
               className='form-label'>
                password2
              </label>
              <input 
                id='password2'
                type='password2' 
                name='password2' 
                className='form-input'
                placeholder='Enter your email address'
                 />
            </div>
          </form>
        </div>
    )
}

export default SignUp
