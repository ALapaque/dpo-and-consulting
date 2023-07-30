import React, { useEffect } from 'react';
import Logo from '@/components/Common/Logo'
import useMenu from '@/hooks/useMenu'

function Navigation({ lightMode, alwaysDark, darkOnScroll }) {
  const { isOpen, toggle } = useMenu(lightMode, alwaysDark)

  useEffect(() => {
    if (darkOnScroll) {
      let nav = document.querySelector('#navi');
      window.addEventListener('scroll', () => {
        if (window.scrollY > (window.visualViewport.height - 77)) {
          nav.className = 'topnav dark change nav-scroll';
          nav.querySelector('h1.logo').style.color = 'black';
        } else {
          nav.className = 'topnav';
          nav.querySelector('h1.logo').style.color = 'white';
        }
      })
    }
  }, [ darkOnScroll ]);

  return (
    <div id='navi' className={`topnav ${alwaysDark && 'navlit'}`}>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <Logo/>
          </a>
        </div>
        <div
          className={`menu-icon cursor-pointer ${isOpen && 'open'}`}
          onClick={toggle}
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
          <span className='icon'><i></i><i></i></span>
          <span>{isOpen ? 'Close' : 'Menu'}</span>
        </div>
      </div>
    </div>
  )
}

export default Navigation
