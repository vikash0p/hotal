import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='container-fluid p-0' id='contact'>
      <div className="row m-0">
        <div className="col p-0">
            <div className="w-50 mt-5 m-auto text-center">
                <h2>Contact <span className='text-warning'>Us</span> </h2>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38840396.232618906!2d44.64927577700203!3d39.59733134328247!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sin!4v1684127146294!5m2!1sen!2sin"  height="450" style={{border:0,width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <section>
                <div class="container mt-5">

                   
                    <form className='shadow p-5'>
                        <div class="row ">
                            <div class="col-lg-6 col-md-6 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-6 col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-12 col-md-12  form-group mt-3 ">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Subject" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                           
                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>
                      
                        <div class="text-center"><button type="submit" className='btn btn-warning px-5 rounded-pill mt-5'>Send Message</button></div>
                    </form>

                </div>
            </section>
    </>


  )
}

export default Contact
