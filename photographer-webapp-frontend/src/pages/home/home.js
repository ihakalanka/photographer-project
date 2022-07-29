import React from "react";

import '../styles/bootstrap.css';
import '../styles/style.css';

import Img11 from '../../assets/a-1.png';
import Img12 from '../../assets/a-2.png';
import Img13 from '../../assets/a-3.png';

import Slider from "../../components/slider";
import Footer from '../../components/footer';
import AbtBtn from '../../components/about/abt-btn';
import Navbar from "../../components/navbar";
import PortBtn from "../../components/portfolio/port-btn";
import Form from "../../components/form";

export default function Home() {

  return (
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">

                <Navbar/>

              </div>
            </div>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}

        <Slider/>

        {/* end slider section */}
      </div>
      {/* about section */}

      <AbtBtn/>
      
      {/* end about section */}
      {/* portfolio section */}

      <PortBtn/>

      {/* end about section */}
      {/* achieve section */}
      <section className="achieve_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              ACHIEVEMENTS
            </h2>
            <p>
              minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </div>
          <div className="achieve_container">
            <div className="box">
              <div className="img-box">
                <img src={Img11} alt="" />
              </div>
              <div className="detail-box">
                <h2>
                  1000+
                </h2>
                <h6>
                  Photo Session
                </h6>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={Img12} alt="" />
              </div>
              <div className="detail-box">
                <h2>
                  9000+
                </h2>
                <h6>
                  Happy Customers
                </h6>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={Img13} alt="" />
              </div>
              <div className="detail-box">
                <h2>
                  1000+
                </h2>
                <h6>
                  Archive Photographs
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end achieve section */}
      {/* client section */}
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>
              Testimonial
            </h2>
            <p>
              minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </div>
          <div className="layout_padding2-top">
            <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
              <div className="row">
                <div className="col-md-3">
                  <div className="btn_container">
                    <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-9 col-lg-8">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="detail-box">
                        <h4>
                          Aloz den
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="detail-box">
                        <h4>
                          Aloz den
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="detail-box">
                        <h4>
                          Aloz den
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      
      <Form/>

      {/* end contact section */}
      {/* info section */}

      <Footer/>
      
    </div>

  );
}

