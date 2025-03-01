// eventExceptions.d.ts
export interface EventException {
    date: string;
    title: string;
    startTime: string;
    endTime: string;
    description: string;
    allDay: boolean;// Adjust this according to your actual data structure
    // Include other properties if necessary
}

export const eventExceptions: EventException[];
