import React from 'react'
import LoginHead from '../../Components/LoginHead/LoginHead'
import LoginFoot from '../../Components/LoginFoot/LoginFoot'
import './Register.scss'
import { Link, useNavigate } from 'react-router-dom'
function Login() {

  var navigate = useNavigate()
  return (
    <section className='login'>
      <LoginHead/>
        <div className="login__in">
          <div className="login__with">
            <h3>Register with</h3>
            <div className="login__icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-apple"></i>
              <i className="bi bi-google"></i>
            </div>
            <p className="or"> or</p>
          </div>
            <form className='form'>
              <div className="group">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Your full name" id='name' />
              </div>
              <div className="group">
                <label htmlFor="password">Email</label>
                <input type="text" placeholder="Email" id='password' />
              </div>
              <div className="group">
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Your password" id='password' />
              </div>
              <div className="togle">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <h3>I agree the <span>Terms and Conditions</span></h3> 
              </div>
            </form>
            <button className="sign__btn" onClick={()=> navigate('/')}>SIGN UP</button>
            <div className="log__out">
                <p>Already have an account?<Link to="/register">Sign in</Link></p>
            </div>
        </div>
      <LoginFoot/>
    </section>
  )
}

export default Login