import React from "react"
import "./Home.css"
import bus from "../../images/school-bus.png"
import delhi from "../../images/delhi.png"
import jaipur from "../../images/jaipur.png"
import agra from "../../images/agra.png"
import mumbai from "../../images/mumbai.png"

const Home = () => {

    return (
        <div className="home">
            <div className="home-header">
                <div>
                    <div className="home-header-icon">
                        <img src={bus} alt=""></img>
                    </div>
                    <div className="home-header-input">
                        <div className="tagline">Journey Made Simple, Tickets In A Click</div>

                        <div className="home-input-container">
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
            <div className="home-cities">
                <div>
                    <img src={delhi} alt=""></img>
                    <div>Delhi</div>
                </div>
                <div>
                    <img src={agra} alt=""></img>
                    <div>Agra</div>
                </div>
                <div>
                    <img src={mumbai} alt=""></img>
                    <div>Mumbai</div>
                </div>
                <div>
                    <img src={jaipur} alt=""></img>
                    <div>Jaipur</div>
                </div>
            </div>
        </div>
    )
}

export default Home;