import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = (): JSX.Element => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
