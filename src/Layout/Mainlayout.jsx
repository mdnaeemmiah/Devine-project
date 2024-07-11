import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const Mainlayout = () => {
    return (
        <div>
           <div className="h-16">
            <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;