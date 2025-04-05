"use client"

import React, {useEffect, useState} from "react";
import "../css/AsideEvents.css"; // Import external CSS file
import { weeklyEvents } from "@/app/weeklyData/default/defaultEvents";
import { eventExceptions } from "@/app/weeklyData/exceptions/exceptionEvents";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/app/firebase/firebase";
import {EventExceptionType} from "@/app/type/eventExceptions";

const AsideEvents = () => {
   /* const events = [
        { id: 1, title: "Team Meeting", date: "July 15, 2024", description: "Weekly team sync-up." },
        { id: 2, title: "Product Launch", date: "July 16, 2024", description: "New product announcement." },
        { id: 3, title: "Workshop", date: "July 18, 2024", description: "Skill-building session." },
        { id: 4, title: "Networking Event", date: "July 19, 2024", description: "Meet industry leaders." },
        { id: 5, title: "Hackathon", date: "July 20, 2024", description: "24-hour coding challenge." }
    ];*/

    const [events, setEvents] = useState<(EventWithDate2 | { id: string; title: any; start: string; end: string; description: any; allDay: any; })[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    type EventWithDate2 = {
        title: string;
        description: string;
        start: string; // ISO string format (Date.toISOString())
        end: string;   // ISO string format
        allDay: boolean;
    };


    const getWeeklyEventDates2 = (monthsAhead = 12) => {

        const now = new Date();
        const currentDayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
        const eventsWithDates: EventWithDate2[] = [];

        const processedDates = new Set(); // To track dates where exception events were added
        const dateCount: Record<string, number> = {}; // Allows string keys with number values
        // To count occurrences of each date

        // Define day of the week mapping
        const dayOfWeekMap = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        };

        weeklyEvents.forEach((event) => {
            const targetDayOfWeek = dayOfWeekMap[event.dayOfWeek as keyof typeof dayOfWeekMap];

            // Calculate days until the next occurrence of the event
            let diffDays = targetDayOfWeek - currentDayOfWeek;
            if (diffDays < 0) diffDays += 7; // Move to the next week if needed

            const startDate = new Date(now);
            startDate.setDate(now.getDate() + diffDays);
            startDate.setHours(parseInt(event.startTime.split(":")[0]), parseInt(event.startTime.split(":")[1]));

            const endDate = new Date(startDate);
            endDate.setHours(parseInt(event.endTime.split(":")[0]), parseInt(event.endTime.split(":")[1]));

            // Loop to create events for the next 'monthsAhead' months
            for (let i = 0; i < monthsAhead * 4; i++) {
                const newStart = new Date(startDate);
                const newEnd = new Date(endDate);

                // Add 7 days (1 week) for each iteration
                newStart.setDate(newStart.getDate() + i * 7);
                newEnd.setDate(newEnd.getDate() + i * 7);

                const eventDate = newStart.toISOString().split("T")[0]; // Format: "YYYY-MM-DD"

                // Increase count for this date
                dateCount[eventDate] = (dateCount[eventDate] || 0) + 1;

                // If an exception event was already processed for this date, skip
                if (processedDates.has(eventDate)) {
                    continue;
                }

                // Check if exceptions exist for this date
                const exceptionsForDate = eventExceptions.filter((e: typeof EventExceptionType[0]) => e.date === eventDate);

                if (exceptionsForDate.length > 0) {
                    exceptionsForDate.forEach((ex) => {
                        const exceptionStart = new Date(newStart);
                        const exceptionEnd = new Date(newEnd);

                        exceptionStart.setHours(parseInt(ex.startTime.split(":")[0]), parseInt(ex.startTime.split(":")[1]));
                        exceptionEnd.setHours(parseInt(ex.endTime.split(":")[0]), parseInt(ex.endTime.split(":")[1]));

                        eventsWithDates.push({
                            title: ex.title,
                            description: ex.description,
                            start: exceptionStart.toISOString(),
                            end: exceptionEnd.toISOString(),
                            allDay: ex.allDay
                        });

                        // Mark this date as processed, so we don't add duplicates
                        processedDates.add(eventDate);
                    });
                } else {
                    // If no exceptions exist, and it's the first occurrence, add the regular event
                    eventsWithDates.push({
                        title: event.title,
                        description: event.description,
                        start: newStart.toISOString(),
                        end: newEnd.toISOString(),
                        allDay: event.allDay
                    });
                }

                /*console.log("description: " + event.description);*/
            }
        });

        return eventsWithDates;
    };

    useEffect(() => {
        const getWeekRange = (weekOffset = 0) => {
            const now = new Date();
            const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            const diffToMonday = (day === 0 ? -6 : 1) - day;

            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() + diffToMonday + (weekOffset * 7));
            startOfWeek.setHours(0, 0, 0, 0);

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);

            return { startOfWeek, endOfWeek };
        };

        const fetchEvents2 = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "events"));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const startTimestamp = data.start;
                    const endTimestamp = data.end;

                    const startDate = new Date(startTimestamp.seconds * 1000 + startTimestamp.nanoseconds / 1000000);
                    const endDate = new Date(endTimestamp.seconds * 1000 + endTimestamp.nanoseconds / 1000000);

                    return {
                        id: doc.id,
                        title: data.title,
                        start: startDate.toISOString(),
                        end: endDate.toISOString(),
                        description: data.description,
                        allDay: data.allDay
                    };
                });

                // Get generated weekly events
                let weeklyEventsWithDates = getWeeklyEventDates2();

                // Exception dates
                const exceptionDates = new Set(eventExceptions.map(ex => ex.date));

                // Get start and end of the current week
                const { startOfWeek, endOfWeek } = getWeekRange(0);
                const now = new Date();

                console.log("Start of week:", startOfWeek);
                console.log("End of week:", endOfWeek);

                // Filter Firestore events
                const filteredFetchedEvents = fetchedEvents.filter(event => {
                    const eventStart = new Date(event.start);
                    const eventEnd = new Date(event.end);
                    return (
                        eventStart >= startOfWeek &&
                        eventEnd <= endOfWeek &&
                        eventEnd >= now &&
                        !exceptionDates.has(event.start.split("T")[0])
                    );
                });

                // Filter weekly events
                weeklyEventsWithDates = weeklyEventsWithDates.filter(event => {
                    const eventStart = new Date(event.start);
                    const eventEnd = new Date(event.end);
                    return (
                        eventStart >= startOfWeek &&
                        eventEnd <= endOfWeek &&
                        eventEnd >= now &&
                        !exceptionDates.has(event.start.split("T")[0])
                    );
                });

                setEvents([...filteredFetchedEvents, ...weeklyEventsWithDates]);
            } catch (err) {
                console.error("Error fetching events:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents2();
    }, []);




    return (
        <aside className="aside-events">
            <h2 id="upcoming-events-title" style={{ marginBottom: "20px", color: "white"}} className="cabin-sketch-regular">UPCOMING EVENTS</h2>
            <div style={{ display: "flex"}}>
                <div style={{ display: "flex", justifyContent: "center", height: "100vh" }} className="events-container">
                    <div>
                        {events
                            .slice() // clone to avoid mutating original state
                            .sort((a, b) => new Date(a.start) - new Date(b.start)) // sort ascending
                            .map((event, index) => {
                                const eventStart = new Date(event.start);
                                const eventEnd = new Date(event.end);
                                const now = new Date();

                                const isOngoing = eventStart <= now && eventEnd >= now;

                                return (
                                    <div
                                        key={`event-${index}`}
                                        className={`event-card ${isOngoing ? "green" : ""}`}
                                        style={{ position: 'relative' }}
                                    >
                                        {isOngoing && (
                                            <div className="now-label">Now</div>
                                        )}
                                        <h3>{event.title}</h3>
                                        <p className="date">
                                            {eventStart.toLocaleString("en-US", {
                                                weekday: "short",
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true
                                            })}
                                        </p>
                                        <p>{event.description}</p>
                                    </div>
                                );
                            })}
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
