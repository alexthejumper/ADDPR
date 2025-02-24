"use client";

import React from "react";
import "../Preloader.css";

const Preloader = () => {
    return (
        <div className="preloader">
            <video autoPlay muted playsInline>
                <source src="/videos/fish.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Preloader;
