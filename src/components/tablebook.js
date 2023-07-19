import React from 'react'

const TableBook = () => {
    return (
        <>
            <section>
                <div className="container mt-5">

                    <div className="text-center">
                        <h2>Book a <span>Table</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br /> adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <form className='shadow p-5'>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                            <div className="validate"></div>
                        </div>

                        <div className="text-center"><button type="submit" className='btn btn-warning px-5 rounded-pill mt-5'>Send Message</button></div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default TableBook
