import React from 'react';
import Link from 'next/link';
import data from '@/data/app-data.json'

function Menu({ lightMode }) {
  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach(item => {
      item.classList.add('hoverd');
    });
    event.currentTarget.classList.remove('hoverd');
  }

  function handleMouseLeave() {
    document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu');
    if (subMenu) {
      if (subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.remove('sub-open');
        subMenu.style.maxHeight = '0';
        subMenu.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '400px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }

  return (
    <div className='hamenu'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
            <div className='menu-text'>
              <div className='text'>
                <h2>Menu</h2>
              </div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='menu-links'>
              <ul className='main-menu rest'>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className='o-hidden'>
                    <div className='link cursor-pointer dmenu'><span className='fill-text' data-text='Home'>Home</span>
                      <i></i></div>
                  </div>
                  <div className='sub-menu'>
                    <ul>
                      <li>
                        <a href={'#about'} className='sub-link'>About us</a>
                      </li>
                      <li>
                        <a href={'#services'} className='sub-link'>Services</a>
                      </li>
                      <li>
                        <a href={'#projects'} className='sub-link'>Projects</a>
                      </li>
                      <li>
                        <a href={'#testimonials'} className='sub-link'>Testimonials</a>
                      </li>
                      <li>
                        <a href={'#news'} className='sub-link'>Latest news</a>
                      </li>
                      <li>
                        <a href={'#contact'} className='sub-link'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className='o-hidden'>
                    <Link href={'about-us'} className='link'>
                      <span
                        className='fill-text' data-text='About Us'>
                        About Us
                      </span>
                    </Link>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className='o-hidden'>
                    <Link href={'projects'} className='link'>
                      <span
                        className='fill-text' data-text='Projects'>
                        Projects
                      </span>
                    </Link>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className='o-hidden'>
                    <Link href={'contact'} className='link'>
                      <span
                        className='fill-text' data-text='Contact'>
                        Contact
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 d-flex align-items-end'>
            <div className='cont-info full-width'>
              <div className='item'>
                <h5 className='mb-15'>Get In Touch</h5>
                <p>{data.company.address}</p>
                {data.company.phone && (
                  <p className='underline main-color mt-5 mb-5'><a href='#0'>{data.company.phone}</a></p>
                )}
                <p><a href='#0'>{data.company.email}</a></p>
              </div>
              {data.company.facebook || data.company.linkedin && (
                <ul className='rest social-text d-flex mt-50 fz-13'>
                  {data.company.facebook && (
                    <li className='mr-20'>
                      <a href={data.company.facebook} className='hover-this'><span
                        className='hover-anim'>Facebook</span></a>
                    </li>
                  )}
                  {data.company.linkedin && (
                    <li className='mr-20'>
                      <a href={data.company.linkedin} className='hover-this'><span
                        className='hover-anim'>LinkedIn</span></a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu