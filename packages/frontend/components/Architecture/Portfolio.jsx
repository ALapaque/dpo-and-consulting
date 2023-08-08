import React from 'react';
//= Data
import data from '@/data/OnePage/portfolio.json';
import Link from 'next/link'

function Portfolio() {
  return (
    <section id={'portfolio'} className='portfolio sub-bg section-padding'>
      <div className='container'>
        <div className='sec-leter-head mb-80'>
          <div className='d-flex align-items-center'>
            <div className='leter'>
              <h4>P</h4>
            </div>
            <div className='line'></div>
          </div>
          <div className='title'>
            <h6 className='sub-title'>Portfolio.</h6>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-5'>
            <div className='item md-mb80'>
              <Link href={`/project/${encodeURIComponent(data[0].title)}`}>
                <div className='o-hidden'>
                  <div className='img imago wow'>
                    <img src={data[0].image} alt=''/>
                  </div>
                </div>
                <div className='cont mt-30 d-flex'>
                  <div>
                    <h6 className='line-height-1'>From our gallery</h6>
                    <p>{data[0].type}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-lg-6 valign'>
            <div className='item full-width'>
              <Link href={`/project/${encodeURIComponent(data[1].title)}`}>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='o-hidden'>
                      <div className='img imago wow'>
                        <img src={data[1].image} alt=''/>
                      </div>
                    </div>
                    <div className='cont mt-30 d-flex'>
                      <div>
                        <h6 className='line-height-1'>From our gallery</h6>
                        <p>{data[1].type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-lg-6 valign'>
            <div className='item mt-80 full-width'>
              <Link href={`/project/${encodeURIComponent(data[2].title)}`}>
                <div className='row justify-content-center'>
                  <div className='col-lg-9'>
                    <div className='o-hidden'>
                      <div className='img imago wow'>
                        <img src={data[2].image} alt=''/>
                      </div>
                    </div>
                    <div className='cont mt-30 d-flex'>
                      <div>
                        <h6 className='line-height-1'>From our gallery</h6>
                        <p>{data[2].type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
