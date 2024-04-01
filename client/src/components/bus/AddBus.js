import React, { useState } from "react";
import "./bus.css";
import "./addbus.css";

import uploadIcon from "../../images/upload.png";
import UploadWidget from "../upload-widget/UploadWidget";


const testBus = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iwd3GKCS-siIfaTxopKv-wHaE9%26pid%3DApi&f=1&ipt=1a4d7a1db3474d3d54de39932b55b8ce55992530cc808adcd272e2fe28667fad&ipo=images";


const AddBus = ()=>{

    const [url, setUrl] = useState("");




    return(
        <div className="addbus">
            <div className="bus-container">
                <div className="bus-modal-image">
                    {/* <img src={testBus} alt=""></img> */}
                    {url === "" ? 
                            <UploadWidget setUrl={setUrl}></UploadWidget> : <img src={url} alt=""></img>
                    }
                </div>
                <div className="bus-modal-content">
                    
                    <div className="bus-modal-name">
                        <div className="bus-modal-content-left">
                            Name: 
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-src">
                        <div className="bus-modal-content-left">
                            Source:
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-departure">
                        <div className="bus-modal-content-left">
                            Departure Time:
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-dest">
                        <div className="bus-modal-content-left">
                            Destination: 
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-arrival">
                        <div className="bus-modal-content-left">
                            Arrival Time: 
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-seats">
                        <div className="bus-modal-content-left">
                            Available Seats: 
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="bus-modal-price">
                        <div className="bus-modal-content-left">
                            Price: 
                        </div>
                        <div className="bus-modal-content-right">
                            <input></input>
                        </div>
                    </div>
                    <div className="add-ticket">
                        <div>
                            <button>-</button>
                            <div>03</div>
                            <button>+</button>
                        </div>
                        <div>
                            <button>BUY</button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBus;