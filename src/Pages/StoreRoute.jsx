import Navbar from "../assets/components/Navbar";
import StoreName from "../assets/components/StoreName";
import Album from "../assets/components/Album";
import React from "react";


const StoreRoute = () => {
    return (
        <React.Fragment>
            <Navbar />
            <StoreName />
            <Album />
        </React.Fragment>
    )
}

export default StoreRoute;