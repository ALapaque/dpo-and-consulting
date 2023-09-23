import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';
import useIsMobile from '@/hooks/useIsMobile';

function Content({ project }) {
  const isMobile = useIsMobile()

  useEffect(() => {
    parallaxie('.back-image.parallaxie', 0.4, undefined, isMobile);
  }, [project]);

  return (
    <section className='section-padding'>
      <div
          className='container'
      >
        <div className='row'>
          <div className={`col-lg-${project.description && project.tags ? '7' : '8'}`}>
            <div className='text'>
              {project.link ?
              (
                <a href={project.link} target='_blank'>
                  <h3>
                    {project.text}

                    <svg
                      style={{
                        marginLeft: '12px'
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </h3>
                </a>
              ) :
              (
                <h3>{project.text}</h3>
              )
            }
            </div>
          </div>
          <div className='col-lg-4 offset-lg-1'>
            <div className='text'>
              {project.description && (<p className='mb-50'>{project.description}</p>)}
              {project.tags && (
                <div className='row'>
                  {project.tags.map((tag, index) => (
                    <div className='col-md-6' key={index}>
                      <ul className='rest dot-list'>
                        {tag.values.map((value, index) => (
                          <li className='mb-15' key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className='row md-marg mt-50'>
          <div className='col-lg-4'>
            <div className='img mb-50'>
              <img src={project.images[0].url} alt={project.images[0].alt}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='img mb-50'>
              <img src={project.images[1].url} alt={project.images[1].alt}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='img mb-50'>
              <img src={project.images[2].url} alt={project.images[2].alt}/>
            </div>
          </div>
        </div>

        <div className='back-image bg-img parallaxie' data-background={project.images[3].url}></div>

        <div className='row mt-100'>
          <div className={`col-lg-${project.secondDescription && project.features ? '4' : '6'} d-flex align-items-center justify-content-center`}>
            <div className='img md-mb50'>
              <img src={project.images[4].url} alt={project.images[4].alt}/>
            </div>
          </div>
          <div className='col-lg-7 offset-lg-1 valign'>
            <div className='text'>
              {project.secondDescription && (<h5 className='fw-200'>{project.secondDescription}</h5>)}
              {project.features && (
                <ul className='rest list-arrow mt-50'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='d-flex align-content-start align-items-baseline nowrap'>
                      <span className='icon'>
                        <svg width='100%' height='100%' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path fillRule='evenodd' clipRule='evenodd'
                                d='M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z'
                                fill='currentColor'></path>
                        </svg>
                      </span>
                      <h6
                        className='inline fz-18 text-break' style={{
                        whiteSpace: 'break-spaces'
                        }}>
                        {feature.name}
                      </h6>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
