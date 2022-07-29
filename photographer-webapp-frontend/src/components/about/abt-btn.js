import React from 'react';

import Img3 from '../../assets/about-img.jpg';
import Img4 from '../../assets/about-img-bg.png';

export default function AbtBtn() {
  return (
    <div>
        <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              About Studio
            </h2>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={Img3} alt="" />
              <div className="about_img-bg">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,
              </p>
              <div style={{color: 'white'}}>
                <a href>
                  about More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
