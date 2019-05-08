import React from "react";
import { Link } from "react-router-dom";

class BottomBar extends React.Component {
  render() {
    return (
      <section id="contact-info" className="bg-dark">
        <div className="info-content1">
          <div className="info-content2">
            <h2>
              <span className="text-primary2">Location</span> Of Head Office
            </h2>
            <p>
              39/19 Moo 5 T.Khokkrabue A.Mueng Samutsakorn 74000 Thailand Tel :
              +6634-442-245-8 Mobile : +6661-168-9989 Fax : +6634-442-249
            </p>

            <h3>
              <span className="text-primary3">Location</span> Bangbon Office
            </h3>
            <p>
              236 Soi Prayamonthat Yak 35-9 Bangbon, Bangbon, Bangkok 10150
              Thailand Tel : +662-417-7224-5 Fax : +662-417-7226
            </p>
          </div>
        </div>
      </section>
    );
  }
}
