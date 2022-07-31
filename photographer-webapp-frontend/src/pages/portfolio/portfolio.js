import React from 'react';

import Navbar from '../../components/navbar';
import Port from '../../components/portfolio/port';
import Footer from '../../components/footer';

export default function Portfolio() {
  return (
    <div>
      <div style={{ background: '#E1F3FD' }}>
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <Navbar />
              </div>
            </div>
          </div>
        </header>
        {/* end header section */}
      </div>
      {/* portfolio section */}

      <Port />

      {/* end about section */}
      {/* info section */}

      <Footer />

      {/* footer section */}
    </div>
  )
}
