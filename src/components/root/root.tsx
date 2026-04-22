import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

function Root(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
};

export default Root;