import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import parallaxie from '@/common/parallaxie';
import RotatingCTA from '@/components/Common/RotatingCTA'

function Header() {
  useEffect(() => {
    parallaxie(`header.parallaxie`, 0.2, -0.5);
  }, []);

  return (
    <header className='header-main full-height valign bg-img parallaxie' data-background='assets/images/hero_2.jpg'
            data-overlay-dark='7'>
      <div className='container ontop'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='caption'>
              <h5 className='fw-300 mb-15'>IT consulting agency</h5>
              <h1 className='fz-80'>Professionalism is the keyword</h1>
            </div>
          </div>
          <div className='col-lg-4 d-flex align-items-end justify-content-end justify-end'>
            <div className='d-flex align-items-center'>
              <RotatingCTA  href={'#services'} label={'Nos services'}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
