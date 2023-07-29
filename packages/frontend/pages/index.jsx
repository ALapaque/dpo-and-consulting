import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/OnePage/Header';
import About from '@/components/OnePage/About';
import Marq from '@/components/OnePage/Marq';
import Services from '@/components/OnePage/Services';
import Portfolio from '@/components/OnePage/Portfolio';
import Intro from '@/components/OnePage/Intro';
import Testimonials from '@/components/OnePage/Testimonials';
import ImageSection from '@/components/OnePage/Image';
import Team from '@/components/OnePage/Team';
import Blog from '@/components/OnePage/Blog';
import Contact from '@/components/OnePage/Contact';
import Footer from '@/components/OnePage/Footer';
import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';

function HomeOnePageLight() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>DPO and Consulting</title>
      </Head>

      <Loader />
      <Navigation darkOnScroll lightMode />
      <Menu lightMode={false} />
      <main className="main-bg">
        <Header />
        <About />
        <Marq />
        <Services />
        <Portfolio />
        <Testimonials />
        <ImageSection />
        <Contact />
      </main>
      <Footer lightMode />
    </>
  )
}

HomeOnePageLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default HomeOnePageLight;
