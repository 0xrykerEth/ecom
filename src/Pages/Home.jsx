import Navbar from "../assets/Components/Navbar";
import StoreName from "../assets/Components/StoreName";
import Footer from "../assets/Components/Footer";
import Tour from "../assets/Components/Tour";
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