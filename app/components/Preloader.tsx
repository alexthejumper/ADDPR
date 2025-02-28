"use client";

import React, {useEffect} from "react";
import "../css/Preloader.css";
import "../scss/orangeLoader.scss";
import "../css/textHoveringEffect.css";

const Preloader = () => {

    useEffect(() => {
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            if (preloader) preloader.style.display = "none"; // Hide preloader after animation
        }, 6000); // 5s animation + 1s buffer
    }, []); // Run once after component mounts

    return (
        <div id="preloader" className="preloader">
            <video id="fish-video" autoPlay muted playsInline>
                <source src="/videos/fish.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>

            <div className="dank-ass-loader">
                <div className="row">
                    <div className="arrow up outer outer-18"></div>
                    <div className="arrow down outer outer-17"></div>
                    <div className="arrow up outer outer-16"></div>
                    <div className="arrow down outer outer-15"></div>
                    <div className="arrow up outer outer-14"></div>
                </div>
                <div className="row">
                    <div className="arrow up outer outer-1"></div>
                    <div className="arrow down outer outer-2"></div>
                    <div className="arrow up inner inner-6"></div>
                    <div className="arrow down inner inner-5"></div>
                    <div className="arrow up inner inner-4"></div>
                    <div className="arrow down outer outer-13"></div>
                    <div className="arrow up outer outer-12"></div>
                </div>
                <div className="row">
                    <div className="arrow down outer outer-3"></div>
                    <div className="arrow up outer outer-4"></div>
                    <div className="arrow down inner inner-1"></div>
                    <div className="arrow up inner inner-2"></div>
                    <div className="arrow down inner inner-3"></div>
                    <div className="arrow up outer outer-11"></div>
                    <div className="arrow down outer outer-10"></div>
                </div>
                <div className="row">
                    <div className="arrow down outer outer-5"></div>
                    <div className="arrow up outer outer-6"></div>
                    <div className="arrow down outer outer-7"></div>
                    <div className="arrow up outer outer-8"></div>
                    <div className="arrow down outer outer-9"></div>
                </div>
            </div>

            <div className="divHoverText">
                <p>J</p>
                <p>e</p>
                <p>s</p>
                <p>u</p>
                <p>s</p>
            </div>
        </div>
    );
};

export default Preloader;
