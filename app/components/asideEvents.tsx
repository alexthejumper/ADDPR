import React from "react";
import "../css/AsideEvents.css"; // Import external CSS file

const AsideEvents = () => {
    const events = [
        { id: 1, title: "Team Meeting", date: "July 15, 2024", description: "Weekly team sync-up." },
        { id: 2, title: "Product Launch", date: "July 16, 2024", description: "New product announcement." },
        { id: 3, title: "Workshop", date: "July 18, 2024", description: "Skill-building session." },
        { id: 4, title: "Networking Event", date: "July 19, 2024", description: "Meet industry leaders." },
        { id: 5, title: "Hackathon", date: "July 20, 2024", description: "24-hour coding challenge." }
    ];

    return (
        <aside className="aside-events">
            <h2 id="upcoming-events-title" style={{ marginBottom: "20px", color: "white"}} className="cabin-sketch-regular">UPCOMING EVENTS</h2>
            <div style={{ display: "flex"}}>
                <div style={{ display: "flex", justifyContent: "center", height: "100vh" }} className="events-container">
                    <div>
                        {events.map(event => (
                            <div key={event.id} className="event-card">
                                <h3>{event.title}</h3>
                                <p className="date">{event.date}</p>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="video-upcoming-events-container">
                    <video id="video-upcoming-events" autoPlay loop muted playsInline>
                        {/*<source src="/videos/render.webm" type="video/webm" />*/}
                        <source src="/videos/upcomingEvents.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </aside>
    );
};

export default AsideEvents;
