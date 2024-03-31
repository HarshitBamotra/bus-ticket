import React from "react";
import "./bus-menu.css";

import busListIcon from "../../images/bus-menu-bus.png";
import rightArrow from "../../images/right-chevron.png";
import bus from "../../images/school-bus.png";


const BusItem = () => {
    return (
        <div className="bus-item">
            <div className="bus-item-image">
                <img src={busListIcon} alt=""></img>
            </div>
            <div className="bus-item-content">
                <div className="bus-item-name">
                    Nue Go
                </div>
                <div className="bus-item-src-dest">
                    <div className="flex1">
                        Source: Chandigarh
                    </div>
                    <div className="flex2">
                        <img src={rightArrow} alt=""></img>
                    </div>
                    <div className="flex1">
                        Destination: Delhi
                    </div>
                </div>
                <div className="bus-item-time">
                    <div className="flex1">Departure: 08:00</div>
                    <div className="flex2">
                        <img src={rightArrow} alt=""></img>
                    </div>
                    <div className="flex1">Arrival: 19:00</div>
                </div>
                <div className="bus-item-price">
                    Price: <span>650.00</span>
                </div>
            </div>
        </div>
    )
}




const BusMenu = () => {
    return (
        <div className="bus-menu">
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
            <div className="bus-list">
                <BusItem></BusItem>
                <BusItem></BusItem>
            </div>
        </div>
    )
}

export default BusMenu;