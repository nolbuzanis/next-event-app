import { useState } from 'react';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { GetStaticProps } from 'next';
import { getAllEvents } from '../../utils/api';

interface EventsPageProps {
  events: EventItem[];
}

const EventsPage = (props: EventsPageProps): JSX.Element => {
  const [events, setEvents] = useState(props.events);

  const handleSearch = (year: string, month: string): void => {
    const filteredEvents = getFilteredEvents({
      year: parseInt(year),
      month: parseInt(month),
    });

    setEvents(filteredEvents);
  };

  // if (!props.events) return <div>loading...</div>;

  return (
    <>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  if ('error' in events) {
    return { notFound: true };
  }

  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
