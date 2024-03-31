import "./App.css"
import BusMenu from "./components/bus-menu/BusMenu";
import Bus from "./components/bus/Bus";
import Home from "./components/Home/Home";
import NavBar from "./components/navigation/NavBar";

const App = ()=>{
    return (

        <div>
            <NavBar></NavBar>
            {/* <Home></Home> */}
            {/* <BusMenu></BusMenu> */}
            <Bus></Bus>
        </div>
    )
}
export default App;