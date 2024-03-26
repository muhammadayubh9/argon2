import React, { useRef, useState } from 'react'
import "./Billing.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BillingIcon from '../../Assets/img/PaypallIcon2.png'
import PaypallIcon from '../../Assets/img/PaypallIcon3.png'
import MasterCard from '../../Assets/Mastercard.png'
import Mastercard2 from '../../Assets/img/Mastercard2.png'
import VisaCard from '../../Assets/img/Visa.png'
function Billing({newEvent}) {
  // const [title, setTitle] = useState('')
  const title = useRef()
  const form = useRef()
  const [showContent, setShowContent] = useState(true)
  console.log('rendering...')
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Oliver Liam',
      company: 'Company Name:',
      companyName: 'Viking Burrito',
      email: 'Email Address:',
      emailAdress: 'oliver@burrito.com',
      number: 'VAT Number:',
      numberVat: 'FRB1235476'
    },
    {
      id: 2,
      title: 'Oliver Liam',
      company: 'Company Name:',
      companyName: 'Viking Burrito',
      email: 'Email Address:',
      emailAdress: 'oliver@burrito.com',
      number: 'VAT Number:',
      numberVat: 'FRB1235476'
    },
    {
      id: 3,
      title: 'Oliver Liam',
      company: 'Company Name:',
      companyName: 'Viking Burrito',
      email: 'Email Address:',
      emailAdress: 'oliver@burrito.com',
      number: 'VAT Number:',
      numberVat: 'FRB1235476'
    }
  ])

  const resetInputs = () => {
    form.current.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title.current.value
    }
    newEvent(event)
    resetInputs()
  }

  var [madal, setMadal] = useState({ is: false, for: "del" })
  var bills = [0, 0, 0, 0, 0]
  var info = [0, 0, 0]
  const handleDelete = (id) => {
    const filteredEvents = events.filter((event)=>{
      return event.id !== id
    })
    setEvents(filteredEvents)
  }



// class InputComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: '' };
//   }

//   handleInputChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
//         <p>Input Value: {this.state.inputValue}</p>
//       </div>
//     );
//   }
// }


  return (
    <>
      <div className={madal.is ? "billingMadalHover opened" : "billingMadalHover"} onClick={(e) => e.target.classList[0] == "billingMadalHover" ? setMadal({ is: false, for: "" }) : null}>
        <div className={madal.is ? "billingMadal opened" : "billingMadal"}>
          {
            madal.for == "del" ?
              <div className='modal__div'>
                <h1>Are you Sure</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis dolores voluptas, eum aliquid asperiores? Fugit laudantium sunt quae necessitatibus eos ipsum quam, provident aperiam voluptatem voluptates error quidem officiis?</p>
                <div className="button__div">
                  <button className='modal__btn' onClick={() => setMadal({ is: false, for: "" })}>NO</button>
                  <button className='modal__btn1' onClick={() => setMadal({ is: false, for: "" })}>Yes</button>
                  
                </div>
              </div>

              :
              <div className="modal__div1">
                <h1>Add something</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, voluptas!</p>
                <form ref={form} onSubmit={handleSubmit}>
                <div className="input__div">
                  <label>Add</label>
                  <input ref={title} type="text" placeholder='Add something' name='add' />
                  <label>Delete something</label>
                  <input ref={title} type="text" placeholder='Delete something' name='delete'/>
                </div>
                <div className="button__div1">
                  <button className='modal__btn' >Cancel</button>
                  <button className='modal__btn1' >Edit</button>
                </div>
                </form>

              </div>
          }
        </div>
      </div>
      <div className="pages">
        <Sidebar />
        <div className="page_hover">
          <Header />

          <div className='page page__billing'>
            <div className="top">
              <div className="inner">
                <div className="inner__first">
                  <div className="inner__in">
                    <div className="card_img">
                      <i className="bi bi-wifi"></i>
                    </div>
                    <h1 className='inner__text1'>4562 1122 4594 7852</h1>
                    <div className="card__span">
                      <span>Card Holder</span><span>Expires</span>
                    </div>
                    <div className="span__wrapper">
                      <div className='card__span2'>
                        <span>Jack Peterson</span><span>11/22</span>
                      </div>
                      <div className="card__span3">
                        <img src={MasterCard} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sec">
                  <img className='sec__img' src={BillingIcon} alt="" />
                  <b>Salary</b>
                  <p>Belong Interactive</p>
                  <hr />
                  {/* <img className='sec__img2' src={BillingHr} alt="" /> */}
                  <span>+$2,000</span>
                </div>
                <div className="thir">
                  <img className='thir__img' src={PaypallIcon} alt="" />
                  <b>Paypal</b>
                  <p>Freelance Payment</p>
                  <hr />
                  {/* <img className='thir__img2' src={BillingHr} alt="" /> */}
                  <span>$49,000</span>
                </div>
                <div className="fourt">
                  <div className="fourt__1">
                    <b>Payment Method</b>
                    <span className='span__card'>ADD A NEW CARD</span>
                  </div>
                  <div className="fourt__inner">
                    <div className="input__div">
                      <img src={Mastercard2} alt="" />
                      <input type="text" defaultValue='**** **** **** 7362' />
                      <i className="bi bi-pencil-fill"></i>
                    </div>
                    <div className="input__div">
                      <img src={VisaCard} alt="" />
                      <input type="text" defaultValue='**** **** **** 3288' /><i className="bi bi-pencil-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aa">
                <div className="aa__inner">
                  <b>Invoices</b>
                  <button>VIEW ALL</button>
                </div>
                {
                  bills.map((item, index) => (
                    <div key={index} className="aa__wrapper">
                      <div className='wrapper__blog'>
                        <p className='blogText'>March, 01, 2020</p>
                        <p className='blogText2'>#MS-415646</p>
                      </div>
                      <div className='wrapper__blog2'>
                        <p>$180</p>
                        <a href={VisaCard} download='Billing img'><i className="bi bi-file-earmark-pdf"></i>PDF</a>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="bottom">
              <div className="billInfo">
                <h1 className='bill__text'>Billing Information</h1>
                    <div  className="Info__second">
                      {showContent && <div>
                        {events.length == 0 &&  <h1 className='text__no'>No contents Yet :)</h1>}
                      {events.map((event) => {
                        return (
                          <div key={event.id} className="second__wrapper">
                            <div className="second__inner1">
                              <h1 className='text1'>{event.title}</h1>
                              <h1 className='text2'>{event.company} <span>{event.companyName}</span></h1>
                              <h1 className='text3'>{event.email} <span>{event.emailAdress} </span></h1>
                              <h1 className='text4'>{event.number} <span> {event.numberVat}</span></h1>
                            </div>
                            <div className="second__inner2">
                              <button className='btn__1' onClick={() => handleDelete(event.id)}><i className="bi bi-trash-fill"></i>DELETE</button>
                              <button className='btn__2' onClick={() => setMadal({ is: true, for: "edit" })}><i className="bi bi-pencil-fill"></i>EDIT</button>
                            </div>
                          </div>
                        )
                      })}
                      </div>}
                     {showContent && <button className='hide__button' onClick={()=>setShowContent(false)}>Hide Content</button>}
                      {!showContent && <button className='show__button' onClick={()=>setShowContent(true)}>Show Content</button>}
                    </div>
              </div>
              <div className="billInfo2">
                <div className="bill__inner">
                  <h1>Your Transactions</h1><p><i className="bi bi-calendar2-fill"></i> 23 - 30 March 2020</p>
                </div>
                <h1 className='newest__text'>NEWEST</h1>
                <div className="bill__newest">
                  <div className="newest__item">
                    <i className="bi bi-dash-circle"></i>
                    <b>Netflix</b>
                    <span>
                      <p className='paragraph__item'>27 March 2020, at 12:30 PM</p><p className='paragraph__item2'>- $2,500</p>
                    </span>
                  </div>
                  <div className="newest__item2">
                    <i className="bi bi-plus-circle"></i>
                    <b>Apple</b>
                    <span>
                      <p className='paragraph__item3'>27 March 2020, at 12:30 PM</p><p className='paragraph__item4'>+ $2,500</p>
                    </span>
                  </div>
                </div>
                <h1 className='yesterday__text'>YESTERDAY</h1>
                <div className="bill__yesterday">
                  <div className="yesterday__item">
                    <i className="bi bi-plus-circle"></i>
                    <b>Stripe</b>
                    <span>
                      <p className='paragraph__yesterday'>26 March 2020, at 13:45 PM</p><p className='paragraph__yesterday2'>+ $800</p>
                    </span>
                  </div>
                  <div className="yesterday__item2">
                    <i className="bi bi-plus-circle"></i>
                    <b>HubSpot</b>
                    <span>
                      <p className='paragraph__yesterday3'>26 March 2020, at 12:30 PM</p><p className='paragraph__yesterday4'>+ $1,700</p>
                    </span>
                  </div>
                  <div className="yesterday__item3">
                    <i className="bi bi-plus-circle"></i>
                    <b>Webflow</b>
                    <span>
                      <p className='paragraph__yesterday5'>26 March 2020, at 05:00 AM</p><p className='paragraph__yesterday6'>+ $2,400</p>
                    </span>
                  </div>
                  <div className="yesterday__item4">
                    <i className="bi bi-exclamation-circle"></i>
                    <b>Microsoft</b>
                    <span>
                      <p className='paragraph__yesterday7'>25 March 2020, at 16:30 PM</p><p className='paragraph__yesterday8'>Pending</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Billing