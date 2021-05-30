import { useState } from 'react';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { GetStaticProps } from 'next';
import axios from 'axios';

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
  try {
    const { data } = await axios.get(
      'https://nextjs-event-app-default-rtdb.firebaseio.com/events.json'
    );

    const parsedData = [];
    for (const key in data) {
      parsedData.push({ id: key, ...data[key] });
    }

    return {
      props: {
        events: parsedData,
      },
      revalidate: 30,
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default EventsPage;
