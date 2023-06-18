"use client"
import './globals.css'
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Caursol from '@/components/Caursol';

import styles from '../app/layout.module.css'
import Menu from '@/components/menu/menu';
import Specials from '@/components/specials/specials';
import Event from '@/components/event/event';
import Chefs from '@/components/chefs/chefs';
import Gallery from '@/components/gallery';
import TableBook from '@/components/tablebook';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'The Global Hotal',
  description: ' These are just some of the common features you can expect to find in hotels. The range and availability of features may vary depending on the specific hotel and its star rating.',
 
}


export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body id='home'>
        <Caursol />
        <div className={styles.set_position}>
          <Navbar />
        </div>
        {children}
        <Menu />
        <Specials />
        <Event />
        <TableBook/>
        
        <Gallery/>
        <Chefs/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}
