import React from "react";
import './App.css';

function Services(){
    return(
        <div classname="Servicecontainer">
            <h1>
            Our Services</h1>
            <div className="Servicelist">
                <div className="Serviceitem">
                <h2> Vehical Booking</h2>
          <p>
            Description of Service One. This could include what the service is, how it works, and any other relevant details.
          </p>
          <div className="Serviceitem">
          <h2>Service Two</h2>
          <p>
            Description of Service Two. Provide information on the benefits and features of this service.
          </p>
        </div>
        <div className="serviceitem">
          <h2>Service Three</h2>
          <p>
            Description of Service Three. Explain how this service can help your customers.
          </p>
        </div>
                    </div>
                    </div> 
            </div>
    )
}

export default Services;
