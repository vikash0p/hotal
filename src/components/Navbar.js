import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const links = [
  {
    href: '#home',
    name: 'Home'
  },
  {
    href: '#about',
    name: 'About'
  },
  {
    href: '#menu',
    name: 'Menu'
  },
  {
    href: '#specials',
    name: 'specials'
  },
  {
    href: '#event',
    name: 'event'
  },
  {
    href: '#chefs',
    name: "Chefs"
  },
  {
    href: '#gallery',
    name: "Gallery"
  },
  {
    href: '#contact',
    name: "Contact"
  },

]


const Navbar = () => {

  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => { setScrollActive(window.scrollY > 30); });

  }, []);

  return (
    <div className={'container-fluid fixed-top' + (scrollActive ? ' bg-dark shadow pt-0' : '')}  >
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand fs-4 pe-5 link-warning " href="/">Delicious</Link>

              <button className="navbar-toggler btn btn-light border border-warning bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon btn btn-light bg-light"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                  {
                    links && links.map((link, idx) => {
                      return (
                        <>
                          <li className="nav-item">
                            <span key={idx}>
                              <Link className="nav-link fs-5  link-light " aria-current="page" href={link.href}>{link.name}</Link>
                            </span>
                          </li>
                        </>

                      )
                    })
                  }
                </ul>
              </div>
          
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
