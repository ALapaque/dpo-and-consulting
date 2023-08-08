import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Navigation from '@/components/Showcases/Navigation'
import Menu from '@/components/Showcases/Menu'
import Footer from '@/components/OnePage/Footer'


function ProjectDetailsLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Project detail</title>
      </Head>

      <Loader />
      <Navigation darkOnScroll lightMode />
      <Menu lightMode={false} />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer lightMode />
    </>
  )
}

ProjectDetailsLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ProjectDetailsLight;
