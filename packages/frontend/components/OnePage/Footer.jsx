import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';
import Logo from '@/components/Common/Logo'

function Footer({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Address</h6>
                </div>
                <div className="text">
                  <p>{data.company.address}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div
                  className="tit mb-20"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <h6 style={{ margin: 0, padding: 0}}>Say Hello</h6>
                  <img
                    src={'assets/images/confetti.gif'}
                    alt={'confetti'}
                    style={{
                      height: '40px',
                      width: '40px'
                    }}
                  />
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">{data.company.email}</a>
                  </p>
                  <h5>
                    <a href="#">{data.company.phone}</a>
                  </h5>
                </div>
              </div>
            </div>
            {data.company.facebook || data.company.linkedin && (
              <div className="col-lg-2 md-mb50">
                <div className="tit mb-20">
                  <h6>Social</h6>
                </div>
                <ul className="rest social-text">
                  {data.company.facebook && (
                    <li>
                      <a href="#0">{data.company.facebook}</a>
                    </li>
                  )}
                  {data.company.linkedin && (
                    <li>
                      <a href="#0">{data.company.linkedin}</a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href='/'>
                    <Logo/>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2023 {data.website.name} is Proudly Powered by <span className="underline"><a href={data.author.link} target="_blank">{data.author.name}</a></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
