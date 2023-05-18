import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
    return (



            <div className="testimonial" id='testimonial'>

             

                    <Swiper pagination={{ dynamicBullets: true, }} slidesPerView={1} slid modules={[Pagination]} className=" w-100  h-75 testimonialset " >

                        <SwiperSlide className=' text-center  text-light '>
                            <img src="images/testimonials-2.jpg" alt="" className='d-block m-auto rounded-circle mt-2 border border-secondary border-3' width={'100px'} height={'100px'} />
                            <h1 className='text-light'>riya</h1>
                            <p><small>ceo & founder</small> </p>
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <h5 className='w-75 m-auto'> <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nisi rem magni veritatis necessitatibus, harum vel, distinctio iste quaerat porro ea magnam quibusdam illum officia molestias enim vitae dignissimos. Nemo!</blockquote> </h5>
                        </SwiperSlide>
                        <SwiperSlide className=' text-center  text-light '>
                            <img src="images/testimonials-5.jpg" alt="" className='d-block m-auto rounded-circle mt-2 border border-secondary border-3' width={'100px'} height={'100px'} />
                            <h1 className='text-light'>raman</h1>
                            <p><small>youtuber</small> </p>
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <h5 className='w-75 m-auto'> <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nisi rem magni veritatis necessitatibus, harum vel, distinctio iste quaerat porro ea magnam quibusdam illum officia molestias enim vitae dignissimos. Nemo!</blockquote> </h5>
                        </SwiperSlide>
                        <SwiperSlide className=' text-center  text-light '>
                            <img src="images/testimonials-3.jpg" alt="" className='d-block m-auto rounded-circle mt-2 border border-secondary border-3' width={'100px'} height={'100px'} />
                            <h1 className='text-light'>riyani</h1>
                            <p><small> founder fo sharktank</small> </p>
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <h5 className='w-75 m-auto'> <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nisi rem magni veritatis necessitatibus, harum vel, distinctio iste quaerat porro ea magnam quibusdam illum officia molestias enim vitae dignissimos. Nemo!</blockquote> </h5>
                        </SwiperSlide>
                        <SwiperSlide className=' text-center  text-light '>
                            <img src="images/testimonials-4.jpg" alt="" className='d-block m-auto rounded-circle mt-2 border border-secondary border-3' width={'100px'} height={'100px'} />
                            <h1 className='text-light'>rajat</h1>
                            <p><small>freelancer</small> </p>
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <h5 className='w-75 m-auto'> <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nisi rem magni veritatis necessitatibus, harum vel, distinctio iste quaerat porro ea magnam quibusdam illum officia molestias enim vitae dignissimos. Nemo!</blockquote> </h5>
                        </SwiperSlide>
                        <SwiperSlide className=' text-center  text-light '>
                            <img src="images/testimonials-5.jpg" alt="" className='d-block m-auto rounded-circle mt-2 border border-secondary border-3' width={'100px'} height={'100px'} />
                            <h1 className='text-light'>akash pandit</h1>
                            <p><small>ceo & founder</small> </p>
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <h5 className='w-75 m-auto'> <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nisi rem magni veritatis necessitatibus, harum vel, distinctio iste quaerat porro ea magnam quibusdam illum officia molestias enim vitae dignissimos. Nemo!</blockquote> </h5>
                        </SwiperSlide>
                        
                       


                    </Swiper>

            </div>
      

    )
}

export default Testimonials
