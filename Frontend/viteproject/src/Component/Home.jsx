import React from 'react'
import '../Home.css'
import { Link } from 'react-router-dom';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import NAV from './NAV';

export default function Home() {
  
  return (
    <div>
      <NAV/>

      
<section>
        <div className="hero">
          <div className="container" data-aos="fade-right">
            <div className="row">
              <div className="col-md-6 ">
                <div className="Hboxtext">
                  <h1>Welcome to GetGas</h1>

                  <p>
                  Your trusted platform for hassle-free gas refills - order with ease and convenience.
                  </p>
                  <div className="Hbuttons">
                    <button className="hb1">Place Order</button>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="Hboximg">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maincards" data-aos="fade" data-aos-delay="300">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="cardbox">
                  <AiOutlinePlayCircle className="cardicon" />
                  <a href="" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="cardbox">
                  <IoDiamondOutline className="cardicon" />
                  <a href="" className="stretched-link">
                    Sed ut perspiciatis
                  </a>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="cardbox">
                  <MdOutlineLocationOn className="cardicon" />
                  <a href="" className="stretched-link">
                    Magni Dolores
                  </a>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="cardbox">
                  <FaRegPlusSquare className="cardicon" />
                  <a href="" className="stretched-link">
                    Nemo Enim
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="About" className="Aboutus">
          <div className="container   ">
            <div className="abouttitiles" data-aos="fade-up">
              <h2>ABOUT US</h2>

              <p>
                <b>
                At GetGas, we're your go-to destination for effortless gas refills. Our platform is designed with your convenience in mind, ensuring a seamless ordering process. We empower gas vendors to expand their reach and serve customers efficiently. With a commitment to safety and reliability, GetGas is your trusted partner for hassle-free gas deliveries
                </b>
              </p>
            </div>
            <div className="row">
              <div className="col-6" data-aos="fade-up">
                <div className="Aboutbox1">
                  <h2>Happy Clients</h2>
                  <img src="https://img.freepik.com/premium-photo/engaging-networking-friendly-conversations_1026451-103.jpg?ga=GA1.1.1262783890.1700261175&semt=ais_ai_generated" alt="" data-aos="fade-right" />
                  <p>
                    Ut fugiat ut sunt quia veniam. Voluptate perferendis
                    perspiciatis quod nisi et. Placeat debitis quia recusandae
                    odit et consequatur voluptatem. Dignissimos pariatur
                    consectetur fugiat voluptas ea.
                  </p>
                  <p>
                    Temporibus nihil enim deserunt sed ea. Provident sit
                    expedita aut cupiditate nihil vitae quo officia vel.
                    Blanditiis eligendi possimus et in cum. Quidem eos ut sint
                    rem veniam qui. Ut ut repellendus nobis tempore doloribus
                    debitis explicabo similique sit. Accusantium sed ut omnis
                    beatae neque deleniti repellendus.
                  </p>
                </div>
              </div>
              <div className="col-6" data-aos="fade-down">
                <div className="Aboutbox2" ata-aos="fade-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    <IoCheckmarkDoneCircle className="abouticons" />
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    <IoCheckmarkDoneCircle className="abouticons" />
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <p>
                    <IoCheckmarkDoneCircle className="abouticons" />
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </p>

                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <img
                    className="imgabout"
                    // src="https://t4.ftcdn.net/jpg/03/00/15/97/360_F_300159721_fOLyltXf2FAxcMrH8pCI70gdWpqxLhhq.jpg"
                    src='https://img.freepik.com/free-photo/truck-with-trailer-road_1340-32492.jpg?ga=GA1.1.1262783890.1700261175&semt=ais_ai_generated'
                    alt=""
                    data-aos="fade-left"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section>
        <div className="cleints"  >
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <img  className="clintsimg" src="https://img.freepik.com/premium-vector/feedback-concept-tiny-people-leave-feedback-put-assessment-online-service-customer-survey_501813-1606.jpg" alt="" />
              </div>
              <div className="col-md-6"data-aos="fade-left">
                <div className="clintnum">
                  <h1>232</h1>
                  <p> <strong  >Happy Clients: </strong>consequuntur quae diredo para mesta</p>
                </div>
                <div className="clintnum">
                  <h1>521</h1>
                  <p> <strong  >Order Served: </strong>consequuntur quae diredo para mesta</p>
                </div>
                <div className="clintnum">
                  <h1>453</h1>
                  <p> <strong  >Vendors: </strong>quae diredo para mesta</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="call-to-action"data-aos="fade-up">
          <div className="container">
            <div className="callbox">
              <div className="circle">
              <h2>Contact us for any Queries</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum.</p>
              <Link to="/Contact" >
              <button>Contact us</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
    

  )
}
