import React, { Component } from "react";
import "./Aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <div>
        <div id="showcase-aboutus">
          <div className="container">
            <div className="showcase-content-aboutus">
              <h1>
                <span className="text-primary1-aboutus">About</span> our company
              </h1>

              <p className="lead-aboutus">
                Our organization aims to manufacture quality plastic bags and
                provides our best services to all levels of customer. We intend
                to continuously improve and develop our production to meet
                international standard management and accreditation od ISO 9001
                : 2015, GMP and HACCP Food Safety with awareness on social and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>

        <div id="showcase2-aboutus">
          <div className="container">
            <div className="showcase-content2-aboutus">
              <h1>
                <span className="text-primary2-aboutus">Company</span> objective
              </h1>

              <p1 className="lead2-aboutus">
                Progressive Organization with continuity Improvement on Quality
                and Safety Product with international standard management system
                and accreditation of ISO 9000 : 2015, GMP, HACCP" is the key
                policy of Prizeinterpack(1999) Co,.Ltd. The company gives an
                importance to internal audit for every production process and
                capability for trace-ability.
              </p1>
            </div>
          </div>
        </div>

        <div id="showcase3-aboutus">
          <div className="container">
            <div className="showcase-content3-aboutus">
              <h1>
                <span className="text-primary3-aboutus">Company</span> objective
              </h1>

              <p className="lead3-aboutus">
                We provide consulting on all plastic packaging to meet with our
                customer requirements. Barcode system with ERP Software linked
                to all related departments like Sales, Purchase, Planning,
                Production, Warehouse and Logistics is applied to our inventory
                control in order to meet all our customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <section id="contact-info-home" className="bg-dark">
          <div className="info-content1">
            <div className="info-content2">
              <h2>
                <span className="text-primary2">Location</span> Of Head Office
              </h2>
              <p-home>
                39/19 Moo 5 T.Khokkrabue A.Mueng Samutsakorn 74000 Thailand
              </p-home>
              <br />
              <p1-home>
                Tel : +6634-442-245-8 Mobile : +6661-168-9989 Fax :
                +6634-442-249
              </p1-home>
            </div>
            <div className="info-content3">
              <h3>
                <span className="text-primary3">Location</span> Of Bangbon
                Office
              </h3>
              <p2-home>
                236 Soi Prayamonthat Yak 35-9 Bangbon, Bangbon, Bangkok 10150
                Thailand
              </p2-home>
              <br />
              <p2-home>Tel : +662-417-7224-5 Fax : +662-417-7226</p2-home>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Aboutus;
