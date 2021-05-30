import EventList from '../components/events/EventList';
import { GetStaticProps } from 'next';
import { getAllEvents } from '../utils/api';

interface HomePageProps {
  events: EventItem[];
}

const HomePage = (props: HomePageProps): JSX.Element => {
  if (!props.events) return <div>loading...</div>;

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();
  if ('error' in events) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      events,
    },
  };
};

export default HomePage;
