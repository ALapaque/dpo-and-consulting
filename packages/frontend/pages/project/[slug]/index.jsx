import React, { useCallback, useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Navigation from '@/components/Showcases/Navigation'
import Menu from '@/components/Showcases/Menu'
import Footer from '@/components/OnePage/Footer'
import { useRouter } from 'next/router'
import data from '@/data/OnePage/portfolio.json';
import appData from '@/data/app-data';

function ProjectDetailsLight() {
  const [ project, setProject ] = useState()
  const router = useRouter()
  const { slug } = router.query

  const _getProject = useCallback(() => {
    if (!slug) return

    const projectName = decodeURIComponent(slug)
    const projectFound = data.find(project => project.title === projectName)

    console.log({data, projectFound})

    projectFound && setProject(projectFound)
  }, [slug])

  useEffect(() => {
    document.body.classList.add('main-bg');
    
    return () => document.body.classList.remove('main-bg');
  }, []);

  useEffect(() => {
    _getProject()
  }, [slug])

  if (!project) {
    return null
  }

  return (
    <>
      <Head>
        <title>{appData.company.name} - {project.title}</title>
      </Head>

      <Navigation darkOnScroll lightMode />
      <Menu lightMode={false} />
      <main>
        <Header project={project} />
        <Content project={project} />
        {project && <CallToAction project={project} />}
      </main>
      <Footer lightMode />
    </>
  )
}

ProjectDetailsLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default ProjectDetailsLight;
