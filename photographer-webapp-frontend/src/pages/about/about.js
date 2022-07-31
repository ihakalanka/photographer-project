import React from 'react';

import Abt from '../../components/about/abt';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function About() {
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
            {/* about section */}
            <Abt />
            {/* end about section */}
            {/* info section */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
