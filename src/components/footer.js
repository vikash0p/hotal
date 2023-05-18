import React from 'react'
import { AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer
  className="text-center text-white mt-5 bg-dark">
  {/* Grid container */}
  <div className="container pt-4">
  <section className="mb-4">
    <h2 className='text-warning'>Delicious</h2>
    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
    </section>
    {/* Section: Social media */}
    <section className="mb-4 fs-4 ">
    <AiOutlineTwitter className='mx-3' />
    <AiFillLinkedin className='mx-3' />
    <BsFacebook className='mx-3' />
    <FaInstagramSquare className='mx-3' />
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center text-light p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2023 Copyright:
    <a className="link-light" href="https://mdbootstrap.com/">
    Delicious

    </a>
  </div>
  {/* Copyright */}
</footer>

  )
}

export default Footer
