import React from 'react'

const Gallery = () => {
    return (
        <>
            <div className="container-fluid mt-5" id='gallery'>
                <div className='text-center  w-50 m-auto'>
                    <h2>Some photos from <span className='text-warning'>Our Restaurant</span> </h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>

                </div>
                <div className=" row g-0 row-cols-1 row-cols-sm-1 row-col-md-4 row-cols-lg-4">
                    <div className="col">
                        <img src="images/gallery-1.jpg" alt="images" className='img-fluid' />
                    </div>
                    <div className="col">
                        <img src="images/gallery-2.jpg" alt="images" className='img-fluid' />
                    </div>
                    <div className="col">
                        <img src="images/gallery-3.jpg" alt="images" className='img-fluid' />
                    </div>
                    <div className="col">
                        <img src="images/gallery-4.jpg" alt="images" className='img-fluid' />

                    </div>
                    <div className="col">
                    <img src="images/gallery-6.jpg" alt="images" className='img-fluid' />
                </div>
                <div className="col">
                    <img src="images/gallery-7.jpg" alt="images" className='img-fluid' />
                </div>
                <div className="col">
                    <img src="images/gallery-8.jpg" alt="images" className='img-fluid' />
                </div>
                <div className="col">
                    <img src="images/gallery-5.jpg" alt="images" className='img-fluid' />
                </div>
                </div>
            </div>
           

     
        </>
    )
}

export default Gallery
