import React from 'react'

import Image from 'next/image'


const Caursol = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src='/images/slide-1.jpg' className="d-block w-100 img-fluid object-fit-fill position-relative" width={1000} height={500} alt="..." />
                     
                        <div class="position-absolute top-50 start-50 translate-middle text-center">
                            <h1 className='text-light'>Sequi ea ut et est quaerat</h1>
                            <p className='text-light'>Ut velit est quam dolor ad a aliquid qui aliquid. <span className=' 	d-sm-none d-md-block d-none d-sm-block'>
                            Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </span> </p>
                            <button className="btn d-sm-none d-md-block d-none d-sm-block my-1 btn-outline-warning px-4 rounded-pill mx-5">our menu</button>
                            <button className="btn  my-1 btn-outline-warning px-4 rounded-pill">Book your order</button>
                        </div>
                      
                    </div>
                    <div className="carousel-item">
                        <Image src='/images/slide-2.jpg' className="d-block w-100 img-fluid object-fit-fill position-relative" width={1000} height={500} alt="..." />
                        <div class="position-absolute top-50 start-50 translate-middle text-center">
                            <h1 className='text-light'>Delicious Restaurant</h1>
                            <p className='text-light'>Ut velit est quam dolor ad a aliquid qui aliquid. <span className=' 	d-sm-none d-md-block d-none d-sm-block'>
                            Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </span> </p>
                          
                            <button className="btn  my-1 btn-warning px-4 rounded-pill">Book your order</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src='/images/slide-3.jpg' className="d-block w-100 img-fluid object-fit-fill position-relative" width={1000} height={500} alt="..." />
                        <div class="position-absolute top-50 start-50 translate-middle text-center">
                            <h1 className='text-light'>Lorem Ipsum Dolor</h1>
                            <p className='text-light'>Ut velit est quam dolor ad a aliquid qui aliquid. <span className=' 	d-sm-none d-md-block d-none d-sm-block'>
                            Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                </span> </p>
                            <button className="btn d-sm-none d-md-block d-none d-sm-block  my-1 btn-outline-warning px-4 rounded-pill mx-5">our menu</button>
                            <button className="btn  my-1 btn-outline-warning px-4 rounded-pill ">Book your order</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Caursol
