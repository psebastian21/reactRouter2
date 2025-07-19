import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const events = useLoaderData()
    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

export default EventsPage;

export async function eventsLoader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {

    } else {
        return (await response.json()).events
    }
}