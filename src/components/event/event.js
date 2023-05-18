import React from 'react'
import styles from './event.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const event = () => {
  const setSwiper = {
    width: '100%',
    height: "80vh",
    
  }

  return (

    <div className={styles.background} id='event'>
      <div className="container" >
        <div className="row">
          <div className="col " >
        
            <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper mt-5" style={setSwiper} >
             
              <SwiperSlide className='mt-5'>
                <div className="row">
                <h1 className='text-light text-center mb-3'>Organize Your Events in our <br />  Restaurant</h1>
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src="images/event-birthday.jpg" className="img-fluid" alt="bootstap" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 text-light d-sm-none d-md-block d-none d-sm-block">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mt-5'>
                <div className="row">
                <h1 className='text-light text-center mb-3'>Organize Your Events in our <br />  Restaurant</h1>
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src="images/event-custom.jpg" className="img-fluid" alt="bootstap" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 text-light">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mt-5'>
                <div className="row">
                <h1 className='text-light text-center mb-3'>Organize Your Events in our <br />  Restaurant</h1>
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src="images/event-private.jpg" className="img-fluid" alt="bootstap" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 text-light">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>

  )
}

export default event
