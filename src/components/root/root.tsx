import styles from './root.module.scss';
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

function Root(){
    return(
        <div className={styles.root}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};

export default Root;