"use client"

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day views
import listPlugin from "@fullcalendar/list"; // List view
import interactionPlugin from "@fullcalendar/interaction";
import "../calendar.css";

const ChurchCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "events"));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    console.log("Data: " + JSON.stringify(data));
                    /*const endDate = data.endDate.toDate(); */ // Convert Firestore Timestamp to Date
                    // Convert Firestore Timestamp to JavaScript Date object
                    // Extracting the end date
                    // Extracting the start and end dates
                    const startTimestamp = data.start;
                    const endTimestamp = data.end;

                    // Converting to JavaScript Date objects
                    const startDate = new Date(startTimestamp.seconds * 1000 + startTimestamp.nanoseconds / 1000000);
                    const endDate = new Date(endTimestamp.seconds * 1000 + endTimestamp.nanoseconds / 1000000);

                    // Converting to ISO string format
                    const formattedStartDate = startDate.toISOString();
                    const formattedEndDate = endDate.toISOString();

                    console.log("Start Date: " + formattedStartDate);
                    console.log("End Date: " + formattedEndDate);

                    return {
                        id: doc.id,
                        title: data.title,
                        start: formattedStartDate, // Format startDate
                        end: formattedEndDate, // Use the formatted end date
                        description: data.description,
                    };
                });

                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();

    }, []);

    useEffect(() => {
        document.body.classList.add("neon-theme");
        return () => document.body.classList.remove("neon-theme");
    }, []);


    // Get today's date in the system's local time in YYYY-MM-DD format
    const today = new Date();
    const localToday = today.toLocaleDateString("en-CA"); // This will use the system's local timezone and return date in YYYY-MM-DD format
    console.log(localToday); // Outputs today's date

    console.log("Today: " + localToday);

    // Apply neon styles dynamically using JavaScript
    const eventDidMount = (info) => {
        const eventDate = info.event.startStr.split("T")[0]; // Extract only the date part (YYYY-MM-DD)

        console.log("Event date: " + eventDate);
        console.log("Today: " + localToday);

        if (eventDate === localToday) {
            console.log("yess present");
            info.el.style.backgroundColor = "#00ff99"; // Neon Green for today
            info.el.style.boxShadow = "0 0 15px #00ff99";
        } else if (eventDate > localToday) {
            console.log("yess future");
            info.el.style.backgroundColor = "#00ccff"; // Neon Blue for future events
            info.el.style.boxShadow = "0 0 10px #00ccff";
        } else {
            console.log("yess past");
            info.el.style.backgroundColor = "#ff0033"; // Neon Red for past events
            info.el.style.boxShadow = "0 0 10px #ff0033";
        }

        info.el.style.color = "black";
        info.el.style.borderRadius = "5px";
        info.el.style.fontWeight = "bold";
        info.el.style.textShadow = "0 0 5px black";
    };


    return (
        <div className="calendar-container container mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-4">Church Calendar</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today", // Navigation buttons
                    center: "title", // Calendar title
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // View modes
                }}
                events={events}
                eventDidMount={eventDidMount} // Apply styles dynamically
                eventClick={(info) => alert(`Event: ${info.event.title}`)}
                eventTimeFormat={{
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false, // Set to true for AM/PM format
                }}
            />
        </div>
    );
};

export default ChurchCalendar;
