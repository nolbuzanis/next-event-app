import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const EventsPage = (): JSX.Element => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
