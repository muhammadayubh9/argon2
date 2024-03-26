import React from 'react'
import './LoginFoot.scss'
import ball from '../../Assets/ball.png'
import eye from '../../Assets/eye.png'
import cat from '../../Assets/cat.png'
import twitter from '../../Assets/twitter.png'
import insta from '../../Assets/insta.png'

function LoginFoot() {
  return (
    <section className='loginfoot'>
      <div className="log__foot">
        <p>Company </p>
        <p>About Us </p>
        <p>Team </p>
        <p>Products </p>
        <p>Blog </p>
        <p>Pricing </p>
      </div>
      <div className="foot__i">
        <img src={ball} alt="" />
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
        <img src={eye} alt="" />
        <img src={cat} alt="" />
      </div>
      <div className="foot__p">
      <p>Copyright © 2021 Soft by Creative Tim.</p>
      </div>
    </section>
  )
}

export default LoginFoot