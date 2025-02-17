"use client"

import Link from "next/link";
import "./ADDprHero.css";
import "./ServiceHoursTextStyles.scss";
import "./NeonCards.scss";
import "./videoContainer.css";
import "./knowMoreButton.css";

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

                {/* Video Background Section */}
                <div className="video-container">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/ocean2.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className="video-overlay">
                        <div className="oswald-font responsive-text servirEnSonNomMarginBottom">Servir en Son Nom</div>

                        <div className="responsive-text-for-video-content quicksand-unique">
                            <p>En tant que disciples du Christ, nous sommes appelés à être ses mains et ses pieds sur Terre, à partager son amour et à apporter la lumière dans ce monde.</p>

                            <p>Servir est un honneur et un témoignage de notre foi.</p>

                            <p>À travers la prière, l'entraide, la louange et l'accompagnement des plus démunis, chaque acte de service reflète l'amour de Dieu.</p>

                            <br/>

                            <p className="fontBolder">"Car même le Fils de l’homme est venu, non pour être servi, mais pour servir et donner sa vie comme la rançon de plusieurs."</p>

                            <p className="fontBolder">(Marc 10:45)</p>

                            <br/>

                            <p>Rejoignez-nous pour bâtir un monde rempli de l’amour de Christ.</p>

                            <p>✨ Servons en Son Nom, pour Sa gloire !</p>

                            <br/>

                            <button className="button-57" role="button"><span className="text">En savoir plus sur nous</span><span className="arrow whiteArrow"></span></button>

                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="divider wave-1"></div>*/}

            <section className="next-section section2">
                <div className="site-container">
                    <div className="columns is-vcentered is-variable is-8 margin2remOnSides">

                        {/* Left Column */}
                        <div className="column is-6 has-text-centered">
                            <h1 className="sHtext protest-revolution-regular backgroundNone title2 has-text-white">Service Hours</h1>
                        </div>

                        {/* Right Column */}
                        <div className="column is-6 is-justify-content-center">
                            {/* Add Video Here */}
                            <video className="service-video" width="100%" autoPlay loop muted>
                                <source src="/videos/scene.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Alternative: Embed YouTube */}
                            {/* <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                title="Service Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}
                        </div>
                        {/* Right Column */}

                    </div>

                    {/*<div className="heightAuto noPadding card glassmorphism neonBorder">
                        <div className="card-content">
                            <ul className="serviceHoursList">
                                <li><strong>Lundi:&nbsp;</strong> <span className="roboto-condensed-unique fontSizeSpan redSpan">FERME</span></li>
                                <br/>
                                <li><strong>Mardi:&nbsp;</strong>
                                    <div className="marginLeft">
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- Reunion d'Edification:&nbsp;17:00 - 18:00</p>
                                    </div>
                                </li>
                                <br/>
                                <li><strong>Mercredi:&nbsp;</strong>
                                    <div className="marginLeft">
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- Reunion d'Intercession:&nbsp;10:00 - Midi</p>
                                    </div>
                                </li>
                                <br/>
                                <li><strong>Jeudi:&nbsp;</strong>
                                    <div className="marginLeft">
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- Reunion de Priere:&nbsp;17:00 - 18:00</p>
                                    </div>
                                </li>
                                <br/>
                                <li><strong>Vendredi:&nbsp;</strong> <span className="roboto-condensed-unique fontSizeSpan redSpan">FERME</span></li>
                                <br/>
                                <li><strong>Samedi:&nbsp;</strong> <span className="roboto-condensed-unique fontSizeSpan redSpan">FERME</span></li>
                                <br/>
                                <li><strong>Dimanche:&nbsp;</strong>
                                    <div className="marginLeft">
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- Reunion de Priere:&nbsp;05:00 - 06:00</p>
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- 1er Culte:&nbsp;08:00 - 10:00</p>
                                        <p className="roboto-condensed-unique blackSpan fontSizeSpan">- 2eme Culte:&nbsp;14:00 - 15:30</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>*/}

                    <div className="service-hours-container">
{/*                        <div className="columns is-multiline is-variable is-1">
                             Monday
                            <div className="column is-1 has-text-centered">
                                <strong>Lundi</strong>
                                <p className="redSpan">FERME</p>
                            </div>

                             Tuesday
                            <div className="column is-1 has-text-centered">
                                <strong>Mardi</strong>
                                <p>- Reunion d'Edification</p>
                                <p>17:00 - 18:00</p>
                            </div>

                             Wednesday
                            <div className="column is-1 has-text-centered">
                                <strong>Mercredi</strong>
                                <p>- Reunion d'Intercession</p>
                                <p>10:00 - Midi</p>
                            </div>

                             Thursday
                            <div className="column is-1 has-text-centered">
                                <strong>Jeudi</strong>
                                <p>- Reunion de Priere</p>
                                <p>17:00 - 18:00</p>
                            </div>

                             Friday
                            <div className="column is-1 has-text-centered">
                                <strong>Vendredi</strong>
                                <p className="redSpan">FERME</p>
                            </div>

                             Saturday
                            <div className="column is-1 has-text-centered">
                                <strong>Samedi</strong>
                                <p className="redSpan">FERME</p>
                            </div>

                             Sunday
                            <div className="column is-1 has-text-centered">
                                <strong>Dimanche</strong>
                                <p>- Reunion de Priere</p>
                                <p>05:00 - 06:00</p>
                                <p>- 1er Culte</p>
                                <p>08:00 - 10:00</p>
                                <p>- 2eme Culte</p>
                                <p>14:00 - 15:30</p>
                            </div>
                        </div>*/}

                        <div className="cardContainer">
                            <div className="cardcard neonText redBackgroundCard">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h1 className="redSpan fontSizeSpan">CLOSED</h1>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">LUNDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h2 className="python sessionContentFontSize centerText">Reunion d'Edification</h2>
                                        <p className="python sessionContentFontSize centerText">17:00 - 18:00</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">MARDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h2 className="java sessionContentFontSize centerText">Reunion d'Intercession</h2>
                                        <p className="java sessionContentFontSize centerText">10:00 - Midi</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">MERCREDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h2 className="python sessionContentFontSize centerText">Reunion de Priere</h2>
                                        <p className="python sessionContentFontSize centerText">17:00 - 18:00</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">JEUDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText redBackgroundCard">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h1 className="redSpan fontSizeSpan">CLOSED</h1>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">VENDREDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText redBackgroundCard">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h1 className="redSpan fontSizeSpan">CLOSED</h1>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">SAMEDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h2 className="java sessionContentFontSize centerText">Reunion de Priere</h2>
                                        <p className="java sessionContentFontSize centerText">05:00 - 06:00</p>
                                        <br/>
                                        <span className="stars"></span>
                                        <h2 className="java sessionContentFontSize centerText">1er Culte</h2>
                                        <p className="java sessionContentFontSize centerText">08:00 - 10:00</p>
                                        <br/>
                                        <span className="stars"></span>
                                        <h2 className="java sessionContentFontSize centerText">2eme Culte</h2>
                                        <p className="java sessionContentFontSize centerText">14:00 - 15:30</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">DIMANCHE</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <div className="divider wave-2"></div>

            <section className="section3">
                <div>
                </div>
            </section>

            <div className="divider wave-3"></div>

            <section className="section4">
                <div>
                </div>
            </section>
        </div>
    );
}
