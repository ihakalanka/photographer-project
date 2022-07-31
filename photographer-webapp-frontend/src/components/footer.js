import React from 'react';

import Img16 from '../assets/fb.png';
import Img17 from '../assets/twitter.png';
import Img18 from '../assets/instagram.png';
import Img19 from '../assets/linkedin.png';
import Img20 from '../assets/dribble.png';
import Img21 from '../assets/pinterest.png';

export default function Footer() {
  return (
    <div>
      <section className="info_section ">
        <div className="container">
          <div className="info_container">
            <div className="info_social">
              <div className="d-flex justify-content-center">
                <h4 className>
                  Follow on
                </h4>
              </div>
              <div className="social_box">
                <a href>
                  <img src={Img16} alt="" />
                </a>
                <a href>
                  <img src={Img17} alt="" />
                </a>
                <a href>
                  <img src={Img18} alt="" />
                </a>
                <a href>
                  <img src={Img19} alt="" />
                </a>
                <a href>
                  <img src={Img20} alt="" />
                </a>
                <a href>
                  <img src={Img21} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info_section */}
      {/* footer section */}
      <section className="container-fluid footer_section">
        <div className="container">
          <p>
            © 2022 All Rights Reserved to Akalanka
          </p>
        </div>
      </section>
    </div>
  )
}
