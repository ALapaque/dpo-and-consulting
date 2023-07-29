import React from 'react';

function About() {
  return (
    <section id={'about'} className='about section-padding'>
      <div className='container'>
        <div className='row md-marg'>
          <div className='col-lg-6 valign'>
            <div className='cont md-mb50'>
              <h6 className='sub-title opacity-8 wow fadeInUp'>About Us.</h6>
              <h2 className='d-slideup wow'>
                <span className='sideup-text'>
                  <span className='up-text'>We are a team of <span className='sub-font'>passionated</span></span>
                </span>
                <span className='sideup-text'>
                  <span className='up-text'>Our goal, is to transform</span>
                </span>
                <span className='sideup-text'>
                  <span className='up-text'>your need in a solution</span>
                </span>
              </h2>
            </div>
          </div>
          <div className='col-lg-6'>
            <div
              className='img'
              style={{
                boxShadow: '-19px 24px 15px -3px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src='assets/images/hero_1.jpg'
                alt='alt'
                style={{ borderRadius: '8px' }}
              />
              <div className='exp main-bg'>
                <h2>5+</h2>
                <h6 className='sub-title'>Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
