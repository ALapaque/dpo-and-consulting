import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import data from '@/data/OnePage/portfolio.json';
import parallaxie from '@/common/parallaxie'

function Header() {
  useEffect(() => {
    loadBackgroudImages();
    parallaxie('.top-bg-img.parallaxie', 0.1);
  }, []);

  return (
    <header className="proj-header1">
      <div className="container mb-50">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption md-mb50">
              <h1>Luxury Glassware.</h1>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-end">
            <div className="info row">
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Category</h6>
                  <span className="sub-title ls1">Digital Design</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Customer</h6>
                  <span className="sub-title ls1">ThemesCamp</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Date</h6>
                  <span className="sub-title ls1">August 6, 2020</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Location</h6>
                  <span className="sub-title ls1">Melbourne, Australia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bg-img bg-img parallaxie" data-background={data[0].image}></div>
    </header>
  )
}

export default Header
