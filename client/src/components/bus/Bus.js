import React from "react"
import "./bus.css"

import bus from "../../images/school-bus.png";

const Bus = () => {
    return (
        <div className="bus">
            <div className="bus-header">
                <div>
                    <div className="bus-header-icon">
                        <img src={bus} alt=""></img>
                    </div>
                    <div className="bus-header-input">
                        <div className="bus-tagline">Journey Made Simple, Tickets In A Click</div>

                        <div className="bus-input-container">
                            <div>
                                <input placeholder="From"></input>
                            </div>
                            <div>
                                <input placeholder="To"></input>
                            </div>
                            <div>
                                <button>search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bus-container">
                <div className="bus-modal-image">

                </div>
                <div className="bus-modal-content">
                    <div className="bus-modal-name">
                        Nue Go
                    </div>
                    <div className="bus-modal-src">
                        <div>
                            Source: Chandigarh
                        </div>
                        <div>

                        </div>
                        <div>
                            Destination: Delhi
                        </div>
                    </div>
                    <div className="bus-modal-time">
                        <div>
                            Departure: 08:00
                        </div>
                        <div>

                        </div>
                        <div>
                            Arrival: 19:00
                        </div>
                    </div>
                    <div className="bus-modal-seats">
                        Available Seats: 37
                    </div>
                    <div className="bus-modal-price">
                        Price: 650.00
                    </div>

                    <div className="add-ticket">

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Bus;