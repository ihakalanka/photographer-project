import React from 'react';
//import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Img5 from '../../assets/p-1.jpg';
import Img6 from '../../assets/p-2.jpg';
import Img7 from '../../assets/p-3.jpg';
import Img8 from '../../assets/p-4.jpg';
import Img9 from '../../assets/p-5.jpg';
import Img10 from '../../assets/p-6.jpg';

export default function Port() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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


          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">


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


              </TabPanel>
              <TabPanel value="2">


                <div className="portfolio_container layout_padding2">
                  <div className="box-1">
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


              </TabPanel>
              <TabPanel value="3">

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
                  </div>
                </div>



              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </section>
    </div>
  )
}
