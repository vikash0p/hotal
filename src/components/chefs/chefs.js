import React from 'react'
import styles from './chefs.module.css'

const Chefs = () => {

    return (
        <div className="container-fluid chefs" id='chefs'>
            <div className='chefs_col'>
                <div className='pt-5 text-center  '>
                    <h1>Our Professional <span className='text-warning'>Chefs</span> </h1>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">

                    <div className="col-lg-4 col-md-6 chefs_container_margin">
                        <div className="member">
                            <div className="pic"><img src="images/chefs-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Master Chef</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 chefs_container_margin">
                        <div className="member">
                            <div className="pic"><img src="images/chefs-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Patissier</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 chefs_container_margin">
                        <div className="member">
                            <div className="pic"><img src="images/chefs-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>Cook</span>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Chefs
