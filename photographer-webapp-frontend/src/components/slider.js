import React from 'react';
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img2 from '../assets/slider-img.jpg';

export default function Slider() {
  return (
    <div>
        <section className=" slider_section position-relative">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
                <div>
              <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5 offset-md-1 ">
                        <div className="detail_box">
                          <h1>
                            photography <br />
                            studio
                          </h1>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content
                          </p>
                          <div className="btn-box">
                            <a href className="btn-1">
                              About Us
                            </a>
                            <a href className="btn-2">
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src={Img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div>
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5 offset-md-1 ">
                        <div className="detail_box">
                          <h1>
                            photography <br />
                            studio
                          </h1>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content
                          </p>
                          <div className="btn-box">
                            <a href className="btn-1">
                              About Us
                            </a>
                            <a href className="btn-2">
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src={Img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div>
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5 offset-md-1 ">
                        <div className="detail_box">
                          <h1>
                            photography <br />
                            studio
                          </h1>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content
                          </p>
                          <div className="btn-box">
                            <a href className="btn-1">
                              About Us
                            </a>
                            <a href className="btn-2">
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src={Img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
    </div>
  )
}
