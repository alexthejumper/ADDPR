"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../css/fonts.css";
import Preloader from "./Preloader";
import Cookies from "js-cookie";

interface NavbarProps {
    homeLink: string;
}

const Navbar = ({ homeLink }: NavbarProps) => {
    const [showStickyNav, setShowStickyNav] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(homeLink === "/");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setShowStickyNav(true);
            } else {
                setShowStickyNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (isLoading) {
            setTimeout(() => setIsLoading(false), 6000);
        }
    }, [isLoading]);

    return (
        <>
        {isLoading && <Preloader />}
            {/* Main Navbar */}
            <nav className="navbar main-navbar" role="navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="#home" className="navbar-item h-100px">
                            <Image className="logoUpDownMargin" src="/logoWithoutBg.png" alt="Church Image" width={100} height={60} />
                            <strong className="permanent-marker-regular is-size-3">Petite Rivière</strong>
                        </Link>
                        {/* Hamburger Menu Toggle */}
                        <button
                            className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
                            aria-label="menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>

                    {/* Navbar Menu (Hidden on mobile, shown when menu is open) */}
                    <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
                        <div className="navbar-end">
                            <Link style={{ fontFamily: "Monda"}} href={homeLink} className="navbar-item"
                            onClick={(e) => {
                                console.log(homeLink);
                                if (homeLink === "#home") {
                                    console.log("Already on the home section!");
                                }
                                else if (homeLink === "/") {
                                    console.log("On events page");
                                    setIsLoading(true);
                                    Cookies.set("contactUsCSS", "true", { expires: 1});
                                    setTimeout(() => setIsLoading(false), 6000);
                                }
                                setIsMenuOpen(false);
                            }}>
                                Home
                            </Link>
                            
                            <Link
                                style={{ fontFamily: "Monda" }}
                                href={homeLink === "#home" ? "#service-hours" : homeLink}
                                className="navbar-item"
                                onClick={(e) => {
                                    console.log("HomeLink: ", homeLink);

                                    if (homeLink === "#home") {
                                    console.log("Already on the home section!");
                                    } else if (homeLink === "/") {
                                    console.log("Navigating to service hours on home page");

                                    // Optional: show loading or set any flags
                                    setIsLoading(true);
                                    Cookies.set("contactUsCSS", "true", { expires: 1 });

                                    // Navigate to /#service-hours
                                    window.location.href = "/#service-hours";

                                    // This timeout likely won't finish if page reloads, but still fine to leave
                                    setTimeout(() => setIsLoading(false), 6000);
                                    }

                                    setIsMenuOpen(false);
                                }}
                                >
                                Service Hours
                            </Link>

                            <Link
                                style={{ fontFamily: "Monda" }}
                                href={homeLink === "#home" ? "#location" : homeLink}
                                className="navbar-item"
                                onClick={(e) => {
                                    console.log("HomeLink: ", homeLink);

                                    if (homeLink === "#home") {
                                    console.log("Already on the home section!");
                                    } else if (homeLink === "/") {
                                    console.log("Navigating to location on home page");

                                    // Optional: show loading or set any flags
                                    setIsLoading(true);
                                    Cookies.set("contactUsCSS", "true", { expires: 1 });

                                    // Navigate to /#service-hours
                                    window.location.href = "/#location";

                                    // This timeout likely won't finish if page reloads, but still fine to leave
                                    setTimeout(() => setIsLoading(false), 6000);
                                    }

                                    setIsMenuOpen(false);
                                }}
                                >
                                Location
                            </Link>

                            <Link
                                style={{ fontFamily: "Monda" }}
                                href={homeLink === "#home" ? "#contact" : homeLink}
                                className="navbar-item"
                                onClick={(e) => {
                                    console.log("HomeLink: ", homeLink);

                                    if (homeLink === "#home") {
                                    console.log("Already on the home section!");
                                    } else if (homeLink === "/") {
                                    console.log("Navigating to contact on home page");

                                    // Optional: show loading or set any flags
                                    setIsLoading(true);
                                    Cookies.set("contactUsCSS", "true", { expires: 1 });

                                    // Navigate to /#service-hours
                                    window.location.href = "/#contact";

                                    // This timeout likely won't finish if page reloads, but still fine to leave
                                    setTimeout(() => setIsLoading(false), 6000);
                                    }

                                    setIsMenuOpen(false);
                                }}
                                >
                                Contact
                            </Link>
                            {/*<Link style={{ fontFamily: "Monda"}} href="#about" className="navbar-item" onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </Link>*/}
                            {/* Add the new "Events" link */}
                            <Link style={{ fontFamily: "Monda"}} href="/events" className="navbar-item" onClick={(e) => {
                                setIsMenuOpen(false);

                                console.log("Going on events page");
                                setIsLoading(true);
                                setTimeout(() => setIsLoading(false), 6000);
                            }}>
                                Events
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sticky Navbar (appears after scrolling) */}
            {showStickyNav && (
                <nav className="navbar is-dark is-fixed-top sticky-navbar" role="navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link href="#home" className="navbar-item">
                                <Image className="logoUpDownMargin" src="/logoWithoutBg.png" alt="Church Image" width={50} height={60} />
                            </Link>
                            {/* Hamburger Menu Toggle */}
                            <button
                                className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
                                aria-label="menu"
                                aria-expanded={isMenuOpen}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </button>
                        </div>

                        {/* Sticky Navbar Menu */}
                        <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
                            <div className="navbar-end">
                                <Link style={{ fontFamily: "Monda"}} href={homeLink} className="navbar-item"
                                onClick={(e) => {
                                    console.log(homeLink);
                                    if (homeLink === "#home") {
                                        console.log("Already on the home section!");
                                    }
                                    else if (homeLink === "/") {
                                        console.log("On events page");
                                        setIsLoading(true);
                                        Cookies.set("contactUsCSS", "true", { expires: 1});
                                        setTimeout(() => setIsLoading(false), 6000);
                                    }
                                    setIsMenuOpen(false);
                                }}
                                >
                                    Home
                                </Link>
                                <Link
                                    style={{ fontFamily: "Monda" }}
                                    href={homeLink === "#home" ? "#service-hours" : homeLink}
                                    className="navbar-item"
                                    onClick={(e) => {
                                        console.log(homeLink);

                                        if (homeLink === "#home") {
                                        console.log("Already on the home section!");
                                        } else if (homeLink === "/") {
                                        console.log("Navigating to service hours on home page");

                                        // Optional: show loading or set any flags
                                        setIsLoading(true);
                                        Cookies.set("contactUsCSS", "true", { expires: 1 });

                                        // Navigate to /#service-hours
                                        window.location.href = "/#service-hours";

                                        // This timeout likely won't finish if page reloads, but still fine to leave
                                        setTimeout(() => setIsLoading(false), 6000);
                                        }

                                        setIsMenuOpen(false);
                                    }}
                                    >
                                    Service Hours
                                </Link>

                                <Link
                                    style={{ fontFamily: "Monda" }}
                                    href={homeLink === "#home" ? "#location" : homeLink}
                                    className="navbar-item"
                                    onClick={(e) => {
                                        console.log("HomeLink: ", homeLink);

                                        if (homeLink === "#home") {
                                        console.log("Already on the home section!");
                                        } else if (homeLink === "/") {
                                        console.log("Navigating to location on home page");

                                        // Optional: show loading or set any flags
                                        setIsLoading(true);
                                        Cookies.set("contactUsCSS", "true", { expires: 1 });

                                        // Navigate to /#service-hours
                                        window.location.href = "/#location";

                                        // This timeout likely won't finish if page reloads, but still fine to leave
                                        setTimeout(() => setIsLoading(false), 6000);
                                        }

                                        setIsMenuOpen(false);
                                    }}
                                    >
                                    Location
                                </Link>

                                <Link
                                    style={{ fontFamily: "Monda" }}
                                    href={homeLink === "#home" ? "#contact" : homeLink}
                                    className="navbar-item"
                                    onClick={(e) => {
                                        console.log("HomeLink: ", homeLink);

                                        if (homeLink === "#home") {
                                        console.log("Already on the home section!");
                                        } else if (homeLink === "/") {
                                        console.log("Navigating to contact on home page");

                                        // Optional: show loading or set any flags
                                        setIsLoading(true);
                                        Cookies.set("contactUsCSS", "true", { expires: 1 });

                                        // Navigate to /#service-hours
                                        window.location.href = "/#contact";

                                        // This timeout likely won't finish if page reloads, but still fine to leave
                                        setTimeout(() => setIsLoading(false), 6000);
                                        }

                                        setIsMenuOpen(false);
                                    }}
                                    >
                                    Contact
                                </Link>
                                {/*<Link style={{ fontFamily: "Monda"}} href="#about" className="navbar-item" onClick={() => setIsMenuOpen(false)}>
                                    About Us
                                </Link>*/}
                                {/* Add the new "Events" link */}
                                <Link style={{ fontFamily: "Monda"}} href="/events" className="navbar-item" onClick={(e) => {
                                    setIsMenuOpen(false);

                                    console.log("Going on events page");
                                    setIsLoading(true);
                                    setTimeout(() => setIsLoading(false), 6000);
                                }}>
                                    Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;