"use client"

import Link from "next/link";
import "./ADDprHero.css";
import "./ServiceHoursTextStyles.scss";
import "./NeonCards.scss";
import "./videoContainer.css";
import "./knowMoreButton.css";
import "./footer.css";
import "./form.css";
import "./transparentEffect.css";
import "./formButton.css";
import "./socialMediaIcons.scss";
import "./floatingSuccessMessageSent.css";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Slider from "react-slick";
import {motion, useInView} from "framer-motion";
import HomeButtonContact from "@/app/components/HomeButtonContact";
import {setupVideoVisibility} from "@/app/lib/videoBackroundStarter";
import {setupVideoVisibilityInCarousel} from "@/app/lib/carouselVideoBackgroundStarter";
import cardScrollAnimation from "@/app/lib/cardScrollAnimation";
import fadeSlideUpAnimation from "@/app/lib/fadeSlideUpAnimation";
import zoomUpAnimation from "@/app/lib/zoomUpAnimation";
import fadeInMap from "@/app/lib/fadeInMap";
import formFadeSlideUp from "@/app/lib/formFadeSlideUp";
import bouncyButtonAnimation from "@/app/lib/bouncyButtonAnimation";
import useZoomUpTopAnimation from "@/app/lib/zoomUpTopAnimation";
import bouncyButtonTopAnimation from "@/app/lib/bouncyButtonTopAnimation";

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



    // State for the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [statusVisible, setStatusVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(''); // Reset the status message

        // Prepare form data to send to the backend API
        const formData = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus('Your message has been sent!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus(`Error: ${result.error}`);
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.');
        }
        setStatusVisible(true);
    };

    // Hide status message after 5 seconds
    useEffect(() => {
        if (statusVisible) {
            const timer = setTimeout(() => {
                setStatusVisible(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [statusVisible]);



    useEffect(() => {
        // Pass an array of video IDs to the setup function
        const cleanupObserver = setupVideoVisibility(['video-background-1', 'video-background-2', 'video-background-3']);

        return () => {
            cleanupObserver(); // Cleanup when the component unmounts
        };
    }, []);


    useEffect(() => {
        // Set up video visibility for both carousels
        const cleanupLeftCarousel = setupVideoVisibilityInCarousel('.left-carousel');
        const cleanupRightCarousel = setupVideoVisibilityInCarousel('.right-carousel');

        return () => {
            // Clean up the observers when the component unmounts
            cleanupLeftCarousel();
            cleanupRightCarousel();
        };
    }, []);


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const buttonRef = useRef(null);
    const isInView2 = useInView(buttonRef, { once: true, margin: "-100px" });

    const headingRef = useRef(null);
    const isInView3 = useInView(headingRef, { once: true, margin: "-100px" });

    // Define animation variants
    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.6, ease: "easeOut" },
        }),
    };


    cardScrollAnimation();
    fadeSlideUpAnimation();
    zoomUpAnimation();
    useZoomUpTopAnimation();
    fadeInMap();
    formFadeSlideUp();
    bouncyButtonAnimation();
    bouncyButtonTopAnimation();

    return (
        <div className="blueBackgroundColor">
            {/* Left Carousel */}
            <motion.div
                className="side-carousel left-carousel zindex-3"
                initial={{ x: "-100%", y: -50, opacity: 0.5 }}  // Start off-screen with low opacity
                animate={{ x: 0, y: -100, opacity: 0.5 }}  // Ends with low opacity
                transition={{ duration: 1, ease: "easeOut", delay: 5 }} // Delay only for initial transition
                whileHover={{ opacity: 1, transition: { duration: 1 } }} // Instant hover effect
            >
                <Slider {...settings}>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Jesusvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Yeshuavideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Sauveurvideo.webm" type="video/webm" />
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
                transition={{ duration: 1, ease: "easeOut", delay: 5 }}
                whileHover={{ opacity: 1, transition: { duration: 1 } }} // Instant hover effect
            >
                <Slider {...settings}>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Dieuvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Eternelvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video autoPlay loop muted playsInline>
                            <source src="/videos/Amourvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Slider>
            </motion.div>

            {/* Main Content */}
            <section id="home" className="hero is-fullheight">
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


                        <h2 className="zoom-up-top subtitle colorWhite">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Rejoignez-nous dans l'adoration et la communion chaque dimanche.
                        </h2>

                        <HomeButtonContact />
                    </div>
                </div>

                {/* Video Background Section */}
                <div className="video-container">
                    <video id="video-background-1" autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/ocean2.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className="video-overlay">
                        <motion.div
                            ref={ref}
                            className="autoShow oswald-font responsive-text servirEnSonNomMarginBottom"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Servir en Son Nom
                        </motion.div>

                        <div ref={ref} className="responsive-text-for-video-content quicksand-unique">
                            {[
                                "En tant que disciples du Christ, nous sommes appelés à être ses mains et ses pieds sur Terre, à partager son amour et à apporter la lumière dans ce monde.",
                                "Servir est un honneur et un témoignage de notre foi.",
                                "À travers la prière, l'entraide, la louange et l'accompagnement des plus démunis, chaque acte de service reflète l'amour de Dieu.",
                                "",
                                "« Car même le Fils de l’homme est venu, non pour être servi, mais pour servir et donner sa vie comme la rançon de plusieurs. »",
                                "(Marc 10:45)",
                                "",
                                "Rejoignez-nous pour bâtir un monde rempli de l’amour de Christ.",
                                "✨ Servons en Son Nom, pour Sa gloire !",
                            ].map((text, i) =>
                                text ? (
                                    <motion.p
                                        key={i}
                                        className={i === 4 || i === 5 ? "fontBolder" : ""}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={fadeInVariant}
                                        custom={i}
                                    >
                                        {text}
                                    </motion.p>
                                ) : (
                                    <br key={i} />
                                )
                            )}

                            <motion.button
                                ref={buttonRef}
                                className="button-57 marginTop"
                                role="button"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 4,
                                    repeat: 0,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                }}
                            >
                                <span className="text">En savoir plus sur nous</span>
                                <span className="arrowKnowMore whiteArrow"></span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="divider wave-1"></div>*/}

            <section id="service-hours" className="next-section section2">
                <div className="site-container">
                    <div className="columns is-vcentered is-variable is-8 margin2remOnSides">

                        {/* Left Column */}
                        <div className="column is-6 has-text-centered">
                            <motion.h1
                                ref={headingRef}
                                className="sHtext protest-revolution-regular backgroundNone title2 has-text-white"
                                initial={{ opacity: 0, x: -100 }}  // Starts off-screen to the left
                                animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Service Hours
                            </motion.h1>
                        </div>

                        {/* Right Column */}
                        <div className="column is-6 is-justify-content-center">
                            {/* Add Video Here */}
                            <video id="video-background-3" className="service-video" width="100%" autoPlay loop muted>
                                <source src="/videos/scene.webm" type="video/webm" />
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



                    <div className="service-hours-container">
                        <div className="cardContainer">
                            <div className="cardcard neonText redBackgroundCard">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        <h1 style={{fontFamily: "Marcellus" }} className="redSpan fontSizeSpan">CLOSED</h1>
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
                                        <h2 style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">Reunion d'Edification</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">17:00 - 18:00</p>
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
                                        <h2 style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">Reunion d'Intercession</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">10:00 - Midi</p>
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
                                        <h2 style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">Reunion de Priere</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">17:00 - 18:00</p>
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
                                        <h1 style={{fontFamily: "Marcellus" }} className="redSpan fontSizeSpan">CLOSED</h1>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2 className="permanent-marker-regular">VENDREDI</h2>
                                </div>
                            </div>

                            <div className="cardcard neonText">
                                <div className="face face1">
                                    <div className="contentcard">
                                        <span className="stars"></span>
                                        {/*<h1 style={{fontFamily: "Marcellus" }} className="redSpan fontSizeSpan">CLOSED</h1>*/}
                                        <span className="stars"></span>
                                        <h2 style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">Ecole des Enfants</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">13:00 - 14:30</p>
                                        <br/>
                                        <span className="stars"></span>
                                        <h2 style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">Chorale</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="java sessionContentFontSize centerText">16:00 - 17:30</p>
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
                                        <h2 style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">Reunion de Priere</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">05:00 - 06:00</p>
                                        <br/>
                                        <span className="stars"></span>
                                        <h2 style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">1er Culte</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">08:00 - 10:00</p>
                                        <br/>
                                        <span className="stars"></span>
                                        <h2 style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">2eme Culte</h2>
                                        <p style={{fontFamily: "Marcellus" }} className="python sessionContentFontSize centerText">14:00 - 15:30</p>
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

            <section id="location" className="section3">
                {/* Header */}
                <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "-30px !important"}} className="is-flex is-justify-content-center">
                    <h1 className="roboto-condensed-unique fontBlack headerFontSize fade-slide-up" style={{ textAlign: "center"}}>
                        Find Your Way to Us
                    </h1>
                </div>

                <br/>
                <br/>

                {/* Content Wrapper */}
                <div style={{
                    margin: "0 30px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px", // Adds spacing between elements
                    textAlign: "center"
                }}>
                    {/* Left Side: Text + Image */}
                    <div className="locationText" style={{ maxWidth: "500px", textAlign: "left", color: "black" }}>
                        <p className="quicksand-unique zoom-up" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                            Notre église est stratégiquement située à Petite-Rivière, offrant un espace chaleureux et accueillant pour le culte et la vie communautaire.
                            Que vous nous rendiez visite pour la première fois ou que vous reveniez, nous serons ravis de vous accueillir !
                        </p>

                        <p className="quicksand-unique zoom-up" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                            Facile à trouver, notre église dispose d’un arrêt de bus juste en face, rendant l’accès en transport publique encore plus pratique.
                            Utilisez le map pour nous localiser.
                        </p>

                        <br/>

                        <p className="zoom-up" style={{ fontSize: "18px", fontWeight: "bold" }}>
                            📍 Addresse: Allee Tamarin, Camp Benoit <br />
                        </p>

                        <br/>

                        <Image
                            className="zoom-up"
                            src="/images/eglise.png"
                            alt="Church building"
                            width={500}
                            height={300}
                            style={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                        />
                    </div>

                    {/* Right Side: Map */}
                    <div className="fade-in-map" style={{ width: "100%", maxWidth: "870px", aspectRatio: "1.2", position: "relative" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.798219623378!2d57.460488175007484!3d-20.184125281262244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c51dc8440a141%3A0xf9deecb571319cc7!2sAssembl%C3%A9e%20de%20Dieu%20Petite%20Riviere!5e0!3m2!1sen!2smu!4v1739937414677!5m2!1sen!2smu"
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "0",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                            /*allowFullScreen=""*/
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>


            <div className="divider wave-3"></div>

            <section id="contact" className="section4">
                <div className="columns-container">
                    {/* First Column - Video */}
                    <video id="video-background-2" className="zoom-up column video-column" autoPlay loop muted playsInline>
                        {/*<source src="/videos/render.webm" type="video/webm" />*/}
                        <source src="/videos/render.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Second Column - Contact Form */}
                    <div className="column form-column login-box" style={{ padding: "0"}}>
                        {/*<h2>Contact Us</h2>*/}

                        <form className="form" onSubmit={handleSubmit}>
                            <h2 className="zoom-up" style={{ color: 'white', fontSize: '2rem', fontFamily: "Marcellus" }}>Contact Us</h2>
                            <p style={{ color: 'white', marginBottom: '20px', fontFamily: "Marcellus" }} className="form-fade-slide-up remainLeft">
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Write your name here.."
                                    required
                                />
                            </p>
                            <p style={{ color: 'white', marginBottom: '20px', fontFamily: "Marcellus" }} className="form-fade-slide-up remainLeft">
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Let us know how to contact you back.."
                                    required
                                />
                            </p>
                            <p style={{ color: 'white', fontFamily: "Marcellus" }} className="form-fade-slide-up remainLeft">
                                Message:
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="What would you like to tell us.."
                                    required
                                ></textarea>
                            </p>
                            <button type="submit" className="bounce-in formButton">Send Message</button>

                            {/*{status && <p>{status}</p>}*/}
                        </form>


                        {/* Floating status message */}
                        {statusVisible && status && (
                            <div className="status-message">
                                {status}
                            </div>
                        )}

                        {/*<input type="text" placeholder="Your Name" className="input-field" />
                        <input type="email" placeholder="Your Email" className="input-field" />
                        <textarea placeholder="Your Message" className="textarea-field"></textarea>
                        <button className="submit-button">Send</button>*/}
                    </div>

                    {/* Separation Line */}
                    <hr className="horizontal-line" style={{ width: "100%", border: "1px solid white", margin: "30px 0", background: "white", borderRadius: "10px" }} />

                    {/* Third Column - Contact Details */}
                    <div className="column details-column">
                        <div style={{ marginBottom: "40px"}}>
                            <h2 className="zoom-up" style={{ marginBottom: "15px", fontSize: "2rem", fontFamily: "Marcellus", color: "white"}}>Contact Details</h2>
                            <br/>
                            <p className="form-fade-slide-up contact-container" style={{ color: "white" }}><strong className="address"></strong> Allee Tamarin, Camp Benoit, Petite Riviere</p>
                            <br/>
                            <p className="form-fade-slide-up contact-container" style={{ color: "white" }}><strong className="phone"></strong> (+230) 5 929 1029</p>
                            <br/>
                            <p className="contact-container form-fade-slide-up">
                                <strong className="mail"></strong>
                                <a href="mailto:assembleepetiteriviere22@gmail.com">assembleepetiteriviere22@gmail.com</a>
                            </p>
                        </div>

                        <div style={{ display: "block"}} className="button-container">

                            <h2 className="zoom-up" style={{ marginBottom: "15", fontSize: "2rem", fontFamily: "Marcellus", color: "white"}}>Suivez Nous</h2>

                            <br/>

                            <div className="facebook-icon form-fade-slide-up">
                                <div className="glass-btn blue-btn">
                                    <a href="https://www.facebook.com/profile.php?id=61572844235340" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            className="facebook-image"
                                            src="/images/facebook.png"
                                            alt="facebook"
                                            width={500}
                                            height={300}
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
