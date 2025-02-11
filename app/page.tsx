"use client"

import Link from "next/link";
import "./ADDprHero.css";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        fade: true
    };

    return (
        <div className="blueBackgroundColor">
            {/* Left Carousel */}
            <motion.div
                className="side-carousel left-carousel zindex-3"
                initial={{ x: "-100%", y: -50, opacity: 0.5 }}  // Start off-screen with low opacity
                animate={{ x: 0, y: -100, opacity: 0.5 }}  // Ends with low opacity
                whileHover={{ opacity: 1 }}  // Full opacity on hover
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Slider {...settings}>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/JesusVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/YeshuaVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/SauveurVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Slider>
            </motion.div>

            {/* Right Carousel */}
            <motion.div
                className="side-carousel right-carousel zindex-3"
                initial={{ x: "100%", y: -50, opacity: 0.5 }}  // Start off-screen with low opacity
                animate={{ x: 0, y: -100, opacity: 0.5 }}  // Ends with low opacity
                whileHover={{ opacity: 1 }}  // Full opacity on hover
                transition={{ duration: 1, ease: "easeOut", /*delay: 0.5*/ }}
            >
                <Slider {...settings}>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/DieuVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/EternelVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/AmourVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Slider>
            </motion.div>

            {/* Main Content */}
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="split-text-container">
                            <span className="text-part left">BIEN</span>
                            <span className="text-part right">VENUE</span>
                        </div>

                        <div className="content">
                            <h1 className="title blueBackgroundColor colorWhite">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                A L'Assemblee de Dieu
                                <br />
                                Petite Riviere
                                <div className="aurora">
                                    <div className="aurora__item"></div>
                                    <div className="aurora__item"></div>
                                    <div className="aurora__item"></div>
                                    <div className="aurora__item"></div>
                                </div>
                            </h1>
                        </div>


                        <h2 className="subtitle colorWhite">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Rejoignez-nous dans l'adoration et la communion chaque dimanche.
                        </h2>
                        <Link href="/contact/" className="button is-light is-large mt-4">
                            Contactez Nous
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
