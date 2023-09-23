import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section id={'about'} className='about section-padding'>
      <div className='container'>
        <div className='row md-marg'>
          <div className='col-lg-6 valign'>
            <div className='cont md-mb50'>
              <h6 className='sub-title opacity-8 wow fadeInUp'>About Me.</h6>
              <h2 className='d-slideup wow'>
                <span className='sideup-text'>
                  <span className='up-text'>I am a <span className='sub-font'>passionated</span> developer</span>
                </span>
                <span className='sideup-text'>
                  <span className='up-text'>always looking to learn</span>
                </span>
                <span className='sideup-text'>
                  <span className='up-text'>new technologies and languages</span>
                </span>
              </h2>
            </div>
          </div>
          <div className='col-lg-6'>
            <div
              className='img'
              style={{
                borderRadius: '8px',
                boxShadow: '-19px 24px 15px -3px rgba(0,0,0,0.1)'
              }}
            >
              <Image
                src='/assets/images/hero_1.jpg'
                alt='alt'
                width={500}
                height={500}
                style={{
                  borderRadius: '8px',
                  transform: 'scaleX(-1)'
              }}
              />
              <div className='exp main-bg'>
                <h2>4+</h2>
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
