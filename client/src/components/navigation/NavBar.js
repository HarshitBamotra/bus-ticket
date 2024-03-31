import "./navbar.css";
import busIcon from "../../images/bus-icon.png";
import ticket from "../../images/ticket.png";
import profile from "../../images/profile.png";


const NavBar = ()=>{
    return (
        <div className="nav-main">
            <div className="nav-item-container">
                <div className="nav-icon-container">
                    <img src={busIcon} alt=""></img>
                </div>
                <div className="nav-content-container">
                    <div className="nav-bus-ticket">
                        <div>
                            <img src={ticket} alt=""></img>
                            <div>Bus Ticket</div>
                        </div>
                    </div>
                    <div className="nav-profile">
                        <div>
                            <img src={profile} alt=""></img>
                            <div>My Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;