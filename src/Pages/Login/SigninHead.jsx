import React from 'react'
import { Link } from 'react-router-dom'
import './SigninHead.scss'
import head1 from '../../Assets/Signin/first.png'
import head2 from '../../Assets/Signin/second.png'
import head3 from '../../Assets/Signin/third.png'
import head4 from '../../Assets/Signin/fourth.png'

function SigninHead() {
  return (
      <header>
        <nav className='nav'>
          <a href="#">
            <h1>Soft UI Dashboard</h1>
          </a>
         <ul className='nav__list'>
          <Link to='/'><li className='nav__item'><img src={head1} alt="" /><p>Dashboard</p></li></Link>
          <Link to='/profile'><li className='nav__item'><img src={head2} alt="" /><p>Profile</p></li></Link>
          <Link to='/register'><li className='nav__item'><img src={head3} alt="" /><p>Sign up</p></li></Link>
          <Link to='/login'><li className='nav__item'><img src={head4} alt="" /><p>Sign in</p></li></Link>
         </ul>
         <button className='download__btn'>FREE DOWNLOAD</button>
        </nav>
      </header>
    )
}

export default SigninHead