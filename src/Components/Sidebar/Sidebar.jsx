import React from 'react'
import "./Sidebar.scss"
import Logo from "../../Assets/awatar/dashboard__bg.svg"
import { Link, useLocation } from 'react-router-dom'
import document from "../../Assets/document.svg"
import HomeIcon from '../Icons/HomeIcon'
import OficeIcon from '../Icons/OficeIcon'
import CreditCard from '../Icons/CreditCard'
import SettignsIcon from '../Icons/SettignsIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import DocumentIcon from '../Icons/DocumentIcon'

function Sidebar() {
  var location = useLocation().pathname
  return (
      <div className='sidebar_hover'>
        <div className="sidebar">
          <img src={Logo} className='sidebar_logo' alt="" />
          <div className="lngr"></div>
          <Link to="/" className={location == "/" ? "item active" : "item"}>
            <div className="svg_hover">
              <HomeIcon style={{w: 24,h: 24, c: location == "/" ? "white" : "#3A416F"}} />
            </div>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/tables" className={location == "/tables" ? "item active" : "item"}>
            <div className="svg_hover">
              <OficeIcon style={{w: 24,h: 24, c: location == "/tables" ? "white" : "#3A416F"}} />
            </div>
            <h3>Tables</h3>
          </Link>
          <Link to="/billing" className={location == "/billing" ? "item active" : "item"}>
            <div className="svg_hover">
              <CreditCard style={{w: 24,h: 24, c: location == "/billing" ? "white" : "#3A416F"}} />
            </div>
            <h3>Billing</h3>
          </Link>
          <Link to="/rtl" className={location == "/rtl" ? "item active" : "item"}>
            <div className="svg_hover">
              <SettignsIcon style={{w: 24,h: 24, c: location == "/rtl" ? "white" : "#3A416F"}} />
            </div>
            <h3>RTL</h3>
          </Link>
          <div className="item">
            <h3 style={{ color: "black" }}>ACCOUNT PAGES</h3>
          </div>
          <Link to="/profile" className={location == "/profile" ? "item active" : "item"}>
            <div className="svg_hover">
              <ProfileIcon style={{w: 24,h: 24, c: location == "/profile" ? "white" : "#3A416F"}} />
            </div>
            <h3>Profile</h3>
          </Link>
          <Link to="/login" className={location == "/login" ? "item active" : "item"}>
            <div className="svg_hover">
              <DocumentIcon style={{w: 24,h: 24, c: location == "/login" ? "white" : "#3A416F"}} />
            </div>
            <h3>Sign In</h3>
          </Link>
          <Link to="/register" className={location == "/register" ? "item active" : "item"}>
            <div className="svg_hover">
              <HomeIcon style={{w: 24,h: 24, c: location == "/register" ? "white" : "#3A416F"}} />
            </div>
            <h3>Sign Up</h3>
          </Link>
          <div className="document">
            <img src={document} alt="" />
            <h2>Need help?</h2>
            <h4>Please check our docs</h4>
            <Link to="#">DOCUMENTATION</Link>
            <Link to="#" className='upgrade'>UPGRADE TO PRO</Link>
          </div>
        </div>
      </div>
  )
}

export default Sidebar