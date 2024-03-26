import React from "react";
import "./LoginHead.scss";
import { Link } from "react-router-dom";
import soft from '../../Assets/soft.png'
function LoginHead() {
  return (
    <section className="login_header">
      <div className="container">
      <div className="dash">
      <div className="backk">
      <img src={soft} alt="" />
      </div>
          <div className="nav__link">
            <Link className="link" to='/'>DASHBOARD</Link>
            <Link className="link" to='/profile'>PROFILE</Link>
            <Link className="link" to='/register'>SIGN UP</Link>
            <Link className="link" to='/login'>SIGN IN</Link>
    
          </div>
            <button>
              <h2>FREE DOWNLOAD</h2>
            </button>
      </div>
      <div className="sign__up">
        <h3>Sign Up</h3>
        <p>Use these awesome forms to login or create new account in your <br /> project for free.</p>
      </div>
      </div>
      
    </section>
  );
}

export default LoginHead;
