"use client"

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day views
import listPlugin from "@fullcalendar/list"; // List view
import interactionPlugin from "@fullcalendar/interaction";
import "../css/calendar.css";

import {weeklyEvents} from "@/app/weeklyData/default/defaultEvents";
import {eventExceptions} from "@/app/weeklyData/exceptions/exceptionEvents";

const ChurchCalendar = () => {
    const [events, setEvents] = useState([]);

    const getWeeklyEventDates = (monthsAhead = 12) => {
        const now = new Date();
        const currentDayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
        const eventsWithDates = [];

        const processedDates = new Set(); // To track dates where exception events were added
        const dateCount = {}; // To count occurrences of each date

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
            const targetDayOfWeek = dayOfWeekMap[event.dayOfWeek];

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
                const exceptionsForDate = eventExceptions.filter((e) => e.date === eventDate);

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

                        // Mark this date as processed so we don't add duplicates
                        processedDates.add(eventDate);
                    });
                } else {
                    // If no exceptions exist and it's the first occurrence, add the regular event
                        eventsWithDates.push({
                            title: event.title,
                            description: event.description,
                            start: newStart.toISOString(),
                            end: newEnd.toISOString(),
                            allDay: event.allDay
                        });
                }
            }
        });

        return eventsWithDates;
    };

    useEffect(() => {
        const fetchEvents = async () => {
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

                // Get generated weekly events and exception dates
                const weeklyEventsWithDates = getWeeklyEventDates();

                // Identify dates with exceptions
                const exceptionDates = new Set(eventExceptions.map(ex => ex.date));

                // Filter fetched events to remove those occurring on exception dates
                const filteredFetchedEvents = fetchedEvents.filter(event => {
                    const eventDate = event.start.split("T")[0]; // Extract YYYY-MM-DD
                    return !exceptionDates.has(eventDate); // Keep only non-exception events
                });

                setEvents([...filteredFetchedEvents, ...weeklyEventsWithDates]);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);


    const eventDidMount = (info) => {
        const eventStart = new Date(info.event.start).getTime();
        const eventEnd = new Date(info.event.end).getTime();
        const nowTimestamp = new Date().getTime();

        if (nowTimestamp >= eventStart && nowTimestamp <= eventEnd) {
            info.el.style.backgroundColor = "#00ff99"; // Neon Green
            info.el.style.boxShadow = "0 0 15px #00ff99";
        } else if (nowTimestamp < eventStart) {
            info.el.style.backgroundColor = "#00ccff"; // Neon Blue
            info.el.style.boxShadow = "0 0 10px #00ccff";
        } else {
            info.el.style.backgroundColor = "#ff0033"; // Neon Red
            info.el.style.boxShadow = "0 0 10px #ff0033";
        }

        info.el.style.color = "black";
        info.el.style.borderRadius = "5px";
        info.el.style.fontWeight = "bold";
        info.el.style.textShadow = "0 0 5px black";
    };

    return (
        <div className="calendar-body">
            <div style={{ padding: "20px !important" }} className="calendar-container container">
                <div style={{ height: "600px", overflowY: "auto", paddingTop: "0 !important", paddingBottom: "0 !important"}} className="mx-auto">
                    {/*<h1 className="text-2xl font-bold text-center mb-4">Church Calendar</h1>*/}
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        stickyHeaderDates={true} // Enables sticky header dates
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                        }}
                        events={events}
                        eventDidMount={eventDidMount}
                        eventClick={(info) => alert(`Event: ${info.event.title}`)}
                        eventTimeFormat={{
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                        }}
                        dayMaxEvents={true}
                        dayMaxEventRows={3}
                        moreLinkClick="popover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChurchCalendar;
