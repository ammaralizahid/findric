import React, {  } from 'react';
// import "../../assets/style.css";
//= Packages
// import Head from 'next/head';
//= Layout
// import Layout from '@/layouts/default';
//= Components
// import Loader from '@/components/Common/Loader';
// import Navbar from '@/components/Common/MainNavbar';
// import Header from '@/components/Shop/Header';
// import List from '@/components/Shop/List';
// import Footer from '@/components/Startup/Footer';
import List from '../Shop/List';

function ShopList() {
//   useEffect(() => {
//     document.body.classList.add('main-bg');
//     // Smooth Scroll of Page
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//     ScrollTrigger.normalizeScroll(true)
//     ScrollSmoother.create({
//       smooth: 2,
//       effects: true,
//     });

//     return () => document.body.classList.remove('main-bg');
//   }, []);

//   const metadata = {
//     subTitle: "SHOPPING",
//     title: "List."
//   }

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="">
            <List /> 
          </main>
        </div>
      </div>
    </>
  )
}

export default ShopList;