import { useState } from 'react';
import { getAllEvents, getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = (): JSX.Element => {
  const [events, setEvents] = useState(getAllEvents());

  const handleSearch = (year: string, month: string): void => {
    const filteredEvents = getFilteredEvents({
      year: parseInt(year),
      month: parseInt(month),
    });

    setEvents(filteredEvents);
  };

  return (
    <>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
