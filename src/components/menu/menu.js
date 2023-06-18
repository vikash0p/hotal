import React from 'react'
import styles from '../menu/menu.module.css'
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
    {
        id: 1,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'starter',
        price: 5
    },
    {
        id: 2,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'starter',
        price: 8
    },
    {
        id: 3,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'starter',
        price: 12
    },
    {
        id: 4,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Salads',
        price: 3
    },
    {
        id: 5,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Salads',
        price: 4
    },
    {
        id: 6,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Salads',
        price: 9
    },
    {
        id: 7,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Specialty',
        price: 4
    },
    {
        id: 8,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Specialty',
        price: 8
    },
    {
        id: 9,
        name: 'Lobster  Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        category: 'Specialty',
        price: 7
    },
]

const starters = menuItems.filter((value, indx) => value.category === 'Specialty')
const salad = menuItems.filter((value, indx) => value.category === 'Salads')
const starter = menuItems.filter((value, indx) => value.category === 'starter')


const Menu = () => {
    return (
        <div id='menu'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center '>Check our tasty <span className='text-warning'>Menu</span> </h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item fs-5" role="presentation">
                            <button className="nav-link link-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Show Alll</button>
                        </li>
                        <li className="nav-item fs-5" role="presentation">
                            <button className="nav-link  link-dark " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Starters</button>
                        </li>
                        <li className="nav-item fs-5" role="presentation">
                            <button className="nav-link  link-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Salade</button>
                        </li>
                        <li className="nav-item fs-5" role="presentation">
                            <button className="nav-link  link-dark" id="pills-stater-tab" data-bs-toggle="pill" data-bs-target="#pills-stater" type="button" role="tab" aria-controls="pills-stater" aria-selected="false">Specility</button>
                        </li>

                    </ul>

                </div>
                <div className="col">

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <div className="container">
                                <motion.div layout className="row">

                                    <AnimatePresence>
                                        {
                                            menuItems.map((menu) => {
                                                return (
                                                    <>
                                                        <motion.div layout
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className='col-12 col-sm-12 col-md-6'>
                                                            <h5 className='text-warning'> {menu.name} <span className='text-dark'>---------------<span className='d-sm-none d-md-inline-block d-none d-sm-inline-block'> ------------------</span> ${menu.price}</span></h5>
                                                            <p className='lh-1'>{menu.title} </p>
                                                            <br />
                                                        </motion.div>
                                                    </>

                                                )
                                            })
                                        }
                                    </AnimatePresence>

                                </motion.div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <div className="container">
                                <motion.div layout className="row">

                                    <AnimatePresence>
                                        {
                                            starters.map((menu) => {
                                                return (
                                                    <>
                                                        <motion.div layout
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className='col-12 col-sm-12 col-md-6'>
                                                            <h5 className='text-warning'> {menu.name} <span className='text-dark'>---------------<span className='d-sm-none d-md-inline-block d-none d-sm-inline-block'> ------------------</span> ${menu.price}</span></h5>
                                                            <p className='lh-1'>{menu.title} </p>
                                                            <br />
                                                        </motion.div>
                                                    </>

                                                )
                                            })
                                        }
                                    </AnimatePresence>

                                </motion.div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                            <div className="container">
                                <motion.div layout className="row">

                                    <AnimatePresence>
                                        {
                                            salad.map((menu) => {
                                                return (
                                                    <>
                                                        <motion.div layout
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className='col-12 col-sm-12 col-md-6'>
                                                            <h5 className='text-warning'> {menu.name} <span className='text-dark'>---------------<span className='d-sm-none d-md-inline-block d-none d-sm-inline-block'> ------------------</span> ${menu.price}</span></h5>
                                                            <p className='lh-1'>{menu.title} </p>
                                                            <br />
                                                        </motion.div>
                                                    </>

                                                )
                                            })
                                        }
                                    </AnimatePresence>

                                </motion.div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-stater" role="tabpanel" aria-labelledby="pills-stater-tab" tabIndex="0">
                            <div className="container">
                                <motion.div layout className="row">

                                    <AnimatePresence>
                                        {
                                            starter.map((menu) => {
                                                return (
                                                    <>
                                                        <motion.div layout
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className='col-12 col-sm-12 col-md-6'>
                                                            <h5 className='text-warning'> {menu.name} <span className='text-dark'>---------------<span className='d-sm-none d-md-inline-block d-none d-sm-inline-block'> ------------------</span> ${menu.price}</span></h5>
                                                            <p className='lh-1'>{menu.title} </p>
                                                            <br />
                                                        </motion.div>
                                                    </>

                                                )
                                            })
                                        }
                                    </AnimatePresence>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu
