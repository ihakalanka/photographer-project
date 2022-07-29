import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Form from '../../components/form';

export default function Contact() {
  return (
    <div>
        <div style={{ background: '#E1F3FD' }}>
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
        </div>
        {/* contact section */}
        <Form/>
        {/* end contact section */}
        {/* info section */}
        <Footer/>
    </div>
  )
}
