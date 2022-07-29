import React from 'react';

import Img5 from '../../assets/p-1.jpg';
import Img6 from '../../assets/p-2.jpg';
import Img7 from '../../assets/p-3.jpg';
import Img8 from '../../assets/p-4.jpg';
import Img9 from '../../assets/p-5.jpg';
import Img10 from '../../assets/p-6.jpg';

export default function PortBtn() {
  return (
    <div>
        <section className="portfolio_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our portfolio
            </h2>
            <p>
              minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </div>
          <div className="portfolio_container layout_padding2">
            <div className="box-1">
              <div className="img-box b-1">
                <img src={Img5} alt="" />
                <div className="btn-box">
                  <a href className="btn-1">
                  </a>
                </div>
              </div>
              <div className="img-box b-2">
                <img src={Img6} alt="" />
                <div className="btn-box">
                  <a href className="btn-1">
                  </a>
                </div>
              </div>
            </div>
            <div className="box-2">
              <div className="box-2-top">
                <div className="img-box b-3">
                  <img src={Img7} alt="" />
                  <div className="btn-box">
                    <a href className="btn-1">
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-2-top2">
                <div className="img-box b-4">
                  <img src={Img8} alt="" />
                  <div className="btn-box">
                    <a href className="btn-1">
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-2-btm">
                <div className="img-box b-5">
                  <img src={Img9} alt="" />
                  <div className="btn-box">
                    <a href className="btn-1">
                    </a>
                  </div>
                </div>
                <div className="img-box b-6">
                  <img src={Img10} alt="" />
                  <div className="btn-box">
                    <a href className="btn-1">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="see_btn" style={{ color: 'white' }}>
            <a href>
              See More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
