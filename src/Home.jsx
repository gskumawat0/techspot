import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from "../src/Images/pic1.svg.webp";
import Common from "./Common";


const Home = () => {


    return (
        <>

            <Common
                name='Grow Your Business With'
                imgsrc={web}
                visit="/service"
                btnname="Get Started"
            />

        </>
    );
};
export default Home;


