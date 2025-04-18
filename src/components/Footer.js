import React from "react";

function Footer(){
    return(
        <div className="card-group" style={{marginTop : "600px"}}>
        <div className="card" style={{borderColor : "white"}}>
    
          <div className="card-body">
            <h5 className="card-title">Features</h5>
            <h6 className="card-text">Offline Access</h6>
            <h6 className="card-text">Progress Tracking</h6>
          </div>
        </div>
        <div className="card" style={{borderColor : "white"}}>          
          <div className="card-body">
            <h5 className="card-title">Company</h5>
            <h6 className="card-text">Terms & Services</h6>
            <h6 className="card-text">Privacy</h6>
            <h6 className="card-text">FAQs</h6>
           </div>
        </div>
        <div className="card" style={{borderColor : "white"}}>
            <div className="card-body">
            <h5 className="card-title">Get in touch</h5>
            <h6 className="card-text">Contact Number- 0000000000</h6>
            <h6 className="card-text">Email address- abcdef@gmail.com</h6>    
          </div>
        </div>
      </div>
    );
}
export default Footer;