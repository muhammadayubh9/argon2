import React from 'react'
import { Link } from 'react-router-dom'
import LoginFoot from '../../Components/LoginFoot/LoginFoot'
import './Login.scss'
import SigninHead from './SigninHead'
import background from '../../Assets/Signin/bgright.png'

function Login() {
  return (
    <div>
      <SigninHead/>
        <div className="login2">
          <div className="left">
            <div className="signin">
              <div className="text">
              <h1>Sign in</h1>
              <p>Enter your email and password to sign in</p>
              </div>
              <form action="#">
                <p>Email</p>
                <input type="text" placeholder='Email'/>
                
                <p>Password</p>
                <input type="text" placeholder='Password'/>

                <div></div>
                <p>Remember me</p>
                <button>SIGN IN </button>
                <div className="bottom">
                <p>Don’t have an account?</p>
                <Link to='/register'><span>Sign Up</span></Link>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            {/* <img src={background} alt="" /> */}
          </div>
        </div>
      <LoginFoot/>
    </div>
  )
}

export default Login