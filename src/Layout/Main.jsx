import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto overflow-hidden'>
                <NavBar></NavBar>
                <div className='min-h-[calc(100vh-416px)]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;