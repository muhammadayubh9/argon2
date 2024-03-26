import React, { useEffect, useState } from 'react'
import './Profile.scss'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
import edit from '../../Assets/awatar/profile__top__awatar.png'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
// import Footer from '../../Components/Footer/Footer'
// import socialIcon from '../../Assets/img/Socialmedia.svg'
// import img1 from '../../Assets/img/img1.png'
// import img2 from '../../Assets/img/img2.png'
// import img3 from '../../Assets/img/img3.png'
// import img4 from '../../Assets/img/img4.png'
import box__bottom__img from '../../Assets/img/bg1.png'
import box__bottom__imgb from '../../Assets/awatar/box__bottom__imgb.png'
import { Link } from 'react-router-dom'
import { awatar } from '../../lib/profilawatar'
// import { ToggleSwitch } from 'flowbite-react';


function Profile() {
  var [switch1,setSwitch1] = useState(false)
  var [switch2,setSwitch2] = useState(false)
  var [switch3,setSwitch3] = useState(false)
  var [switch4,setSwitch4] = useState(false)
  var [switch5,setSwitch5] = useState(false)
  var [switch6,setSwitch6] = useState(false)
  useEffect(() => {
    fetch('https://6565a42aeb8bb4b70ef20029.mockapi.io/cars')
      .then((res) => res.json())
      .then((data) => console.log(data))

  }, [])

  const [active, setActive] = useState(1)
  const handleButtonClick = (buttonId) => {
    setActive(buttonId);
  };

  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({ input1: '', input2: '', input3: '' });
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddButtonClick = () => {
    // Check if all inputs are filled
    if (inputValues.input1 && inputValues.input2 && inputValues.input3) {
      // Add the data to the list
      setListItems((prevList) => [...prevList, { ...inputValues }]);
      // Clear input values
      setInputValues({ input1: '', input2: '', input3: '' });
    }
  };

function cardPost(event) {
  event.preventDefault()
  console.log(event);
  
}
  return (
    <div className="pages">
      <Sidebar />
      <div className="page_hover profile__HOVER">
        <Header />
        <div className='page'>
          <div className="prof__main">
            <div className="box__top">
              <div className="account">
                <div className="account__wrapper">
                  <span className='account__wrapper--span'>
                    <span className='editImg'>
                      <img src={edit} alt="" />
                    </span>
                    <span className='edit__info'>
                      <h4>Alec Thompson</h4>
                      <p>CEO / Co-Founder</p>
                    </span>
                  </span>
                  <div className="account__wrapper__list">
                    <ul className="profile__list">
                      <li onClick={() => handleButtonClick(1)} className={active === 1 ? 'active list__item ' : 'list__item '}>
                        <p><i className="bi bi-box ppp__i"></i>  OVERVIEW</p>
                      </li>
                      <li onClick={() => handleButtonClick(2)} className={active === 2 ? 'active list__item ' : 'list__item'}>
                        <p><i className="bi bi-files ppp__i"></i> TEAMS</p>
                      </li>
                      <li onClick={() => handleButtonClick(3)} className={active === 3 ? 'active list__item ' : 'list__item'}>
                        <p><i className="bi bi-wrench-adjustable ppp__i"></i> PROJECTS</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="box__center">
              <div className="setttings">
                <ul className="settin__list">
                  <li className="set__item1">
                    <h3>Platform Settings</h3>
                    <p>ACCOUNT</p>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch1(!switch1)}>
                        <span style={{transform: switch1 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>Email me when someone follows me</span>
                    </div>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch2(!switch2)}>
                        <span style={{transform: switch2 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>Email me when someone answers me</span>
                    </div>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch3(!switch3)}>
                        <span style={{transform: switch3 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>Email me when someone mentions me</span>
                    </div>
                    <p className="checkbox_hover__p">APPLICATION</p>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch4(!switch4)}>
                        <span style={{transform: switch4 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>New launches and projects</span>
                    </div>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch5(!switch5)}>
                        <span style={{transform: switch5 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>Monthly product updates</span>
                    </div>
                    <div className="checkbox_hover">
                      <div className="checkbox" onClick={()=> setSwitch6(!switch6)}>
                        <span style={{transform: switch6 ? "translateX(5px)": "translateX(44px)"}}></span>
                      </div>
                      <span id='check__box__span'>Subscribe to newsletter</span>
                    </div>
                  </li>
                  <li className="set__item2 ">
                    <div className="set__item2__card"><h3>Profile Information</h3> <i className="bi bi-pencil-fill"></i></div>
                    <div className="set__item2__card2">
                      <p>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    </div>
                    <div className="set__item____card3">
                      <div className='eychar'></div>
                      <span className="set__item2__card3__span">
                        <p>Full Name:<b>Sarah Emily Jacob</b></p>
                      </span>
                      <span className="set__item2__card3__span">
                        <p>Mobile: <b>(44) 123 1234 123</b></p>
                      </span>
                      <span className="set__item2__card3__span">
                        <p>Email:<b>sarahjacob@mail.com</b></p>

                      </span>
                      <span className="set__item2__card3__span">
                        <p>Location: <b>USA</b></p>

                      </span>
                      <span className="set__item2__card3__span">
                        <p>Social: <span id='set__item2__card3__span'>
                          <Link><i className="bi bi-facebook i__1"></i></Link>
                          <Link>   <i className="bi bi-twitter i__2"></i></Link>
                          <Link>  <i className="bi bi-instagram i__3"></i></Link>
                        </span></p>

                      </span>
                    </div>
                  </li>
                  <li className="set__item3 ">
                    <h3>Conversations</h3>
                    <ul className='box3__listt'>
                      {awatar && awatar.map((item) => (
                        <li className="box3__itemt" key={item.id}>
                          <div className="img__div">
                            <img src={item.img} alt="" />
                          </div>
                          <span className='box3__item__span'>
                            <b>{item.title}</b>
                            <p>{item.text}</p>
                          </span>
                          <div className="box3__item__h5">{item.erp}</div>
                        </li>
                      ))}
                    </ul>

                  </li>
                </ul>
              </div>
            </div>
            <div className="box__bottom">
              <h2>Projects</h2>
              <p>Architects design houses</p>
              <ul className="box__bottom__list">
                <li className="box__bottom__item">
                  <img src={box__bottom__img} alt="" />
                  <div>
                    <h6>Project #1</h6>
                    <h5>Modern</h5>
                    <p>As Uber works through a huge amount of internal management turmoil.</p>
                    <span>
                      <button>VIEW PROJECT</button>
                      <img src={box__bottom__imgb} alt="" />
                    </span>
                  </div>
                </li>
                <li className="box__bottom__itemm">
                  <div className="box__bottom__item__icon">
                    <i class="bi bi-arrow-bar-up" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    <p>Upload New Project</p>
                  </div>
                </li>
              </ul>


              <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog box__bottom__modal">
                  <div class="modal-content box__bottom__modal__">
                    <div class="modal-header ">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Project</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body box__bottom__modal__body">
                      <form action="" onSubmit={(event)=> cardPost} className="box__bottom__form">
                        <input className='box__bottom__input' type="text" placeholder='Add img'/>
                        <input className='box__bottom__input' type="text" placeholder='Add Project #1'/>
                        <input className='box__bottom__input' type="text" placeholder='Add name'/>
                        <input className='box__bottom__input' type="text" placeholder='Add text'/>
                        <input className='box__bottom__input' type="text" placeholder='Add awatar'/>
                        <button className='box__bottom__btn' type='submit'>add</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile