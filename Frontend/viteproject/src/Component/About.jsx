import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Footer";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../App.css";
import '../About.css';

export default function About() {
 
  return (
//     <div>
//        <button
//   className="btn btn-primary"
//   type="button"
//   data-bs-toggle="collapse"
//   data-bs-target="#whyChooseUsContent"
//   aria-expanded="false"
//   aria-controls="whyChooseUsContent"
// >
//   Why Choose Us
// </button>
// <div className="collapse" id="whyChooseUsContent">
//   <ul className="list-group">
//     <li className="list-group-item">
//       <strong>Quality Assurance:</strong> We source our gas from reputable suppliers, guaranteeing the highest quality and safety standards for your peace of mind.
//     </li>
//     <li className="list-group-item">
//       <strong>Reliable Deliveries:</strong> Our efficient delivery system ensures that your gas supply is never interrupted. We keep track of your usage and schedule deliveries just in time.
//     </li>
//     <li className="list-group-item">
//       <strong>Competitive Pricing:</strong> We believe that essential services should be affordable. That's why we offer competitive prices without compromising on quality.
//     </li>
//     <li className="list-group-item">
//       <strong>Exceptional Customer Service:</strong> Our dedicated support team is always ready to assist you. Whether you have questions, concerns, or need assistance, we're here to help.
//     </li>
//   </ul>
// </div>

     
//     </div>
<div>
      {/* <Carousel className='mt-5'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.tomoe.com.sg/image/cache/catalog/3-1920x600.jpg"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.tomoe-batam.com/images/slides/slide-two.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.jtl-diecasting.com/uploads/202211433/ImgScroll/ba202201071432291788229.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel> */}

      <section>
        <div className="container">
          <div className="row specialchilds">
            <div className="col-md-4 specialchild1">
              <h1 className="our-mission">OUR MISSION</h1>
            </div>
            <div className="col-md-4 specialchild2">
              <h3>For Users:</h3>
              <p>
                Our mission is to make your life easier and more convenient. We
                understand the hassles and uncertainties that come with managing
                your gas refills. Therefore, we aim to provide you with a
                seamless and efficient solution. With our platform, you can
                effortlessly place gas refilling orders from the comfort of your
                home. We'll ensure that your orders are delivered promptly and
                safely to your doorstep
              </p>
            </div>
            <div className="col-md-4 specialchild3">
              <h3> For Vendors:</h3>
              <p>
                Our mission extends to our valued vendors as well. We aim to
                empower and connect vendors, offering them a platform to reach a
                broader customer base. By joining our network, vendors can
                streamline their operations, receiving orders directly from
                users in need of gas refills. We provide a reliable and
                efficient means for vendors to expand their business and serve a
                wider audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cardsback">
        <button
          className="btn  cardsButton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#whyChooseUsContent"
          aria-expanded="false"
          aria-controls="whyChooseUsContent"
        >
          <b>Why Choose Us</b>
        </button>
        <div className="container">
          <div className="collapse p-5" id="whyChooseUsContent">
            <ul className="list-group">
              <div className="swipershaow">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={50}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    400: {
                      slidesPerView: 1, // Display one card per slide on screens with a width of 400px or less (mobile screens).
                    },
                    550: {
                      slidesPerView: 2, // Display two cards per slide on screens with a width of 932px or less (medium-sized screens).
                    },
                    1200: {
                      slidesPerView: 3, // Display three cards per slide on screens with a width of 1200px or less (larger screens).
                    },
                  }}
                  navigation={{
                    // Add navigation configuration
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="card">
                      <img
                        src="https://img.freepik.com/premium-photo/petrochemical-industry-sky-sunset_168569-127.jpg?size=626&ext=jpg&uid=R120267723&ga=GA1.1.1223514889.1685116320&semt=ais"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="card">
                      <img
                        src="https://img.freepik.com/premium-photo/industrial-furnace-heat-exchanger-cracking-hydrocarbons-factory-sky-sunset-close-up-equipment-petrochemical-plant_168569-9.jpg?size=626&ext=jpg&uid=R120267723&ga=GA1.1.1223514889.1685116320&semt=ais"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="card">
                      <img
                        src="https://img.freepik.com/free-photo/pollution-industry-exterior-daylight_23-2149057673.jpg?size=626&ext=jpg&uid=R120267723&ga=GA1.1.1223514889.1685116320&semt=ais"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="card">
                      <img
                        src="https://img.freepik.com/premium-photo/petrochemical-industry-sky-sunset_168569-127.jpg?size=626&ext=jpg&uid=R120267723&ga=GA1.1.1223514889.1685116320&semt=ais"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="card">
                      <img
                        src="https://img.freepik.com/free-photo/environmental-pollution-factory-exterior_23-2149057713.jpg?size=626&ext=jpg&uid=R120267723&ga=GA1.1.1223514889.1685116320&semt=ais"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-primary">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </Swiper>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="remember">
        <h3 >
          <b>Remember</b>, safety is paramount when dealing with damaged gas
          cylinders. Your quick and responsible actions can prevent accidents
          and ensure the well-being of everyone around.
        </h3>
      </div>
      <section>
        <div className="container mt-5 damage">
          <div className="row">
            <div className="col-md-6 ">
              <div className="tigerdivwidth"></div>
              <h1 className="tigerdivtext">
                <b>Do Not Use</b>
              </h1>
            </div>
            <div className="col-md-6">
              <div className="collumn2tiger">
                <h1>Damage Gas Cylinder</h1>
                <p>
                  At times, gas cylinders may encounter unforeseen issues,
                  leading to potential dangers. If you come across a gas
                  cylinder that appears damaged or compromised, it's crucial to
                  handle it with care and report it promptly.
                </p>
              </div>
              <div className="tiger2divwidth"></div>

            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
