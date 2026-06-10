import Navbar from "../assets/components/Navbar";
import StoreName from "../assets/components/StoreName";
import Footer from "../assets/components/Footer";
import Tour from "../assets/components/Tour";
import React from "react";
import "./Home.css";

const Home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <StoreName>
                <div className="album-section">
                    <button className="album-btn">
                        Get our Latest Album
                    </button>

                    <button className="play-btn">
                        ►
                    </button>
                </div>
            </StoreName>
            <Tour />
            <Footer />
        </React.Fragment>
    )
}

export default Home;