import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';
import axios from 'axios';
import { GetStaticProps } from 'next';

interface HomePageProps {
  events: EventItem[];
}

const HomePage = (props: HomePageProps): JSX.Element => {
  // const featuredEvents = getFeaturedEvents();

  if (!props.events) return <div>loading...</div>;

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get(
      'https://nextjs-event-app-default-rtdb.firebaseio.com/events.json'
    );

    const parsedData = [];
    for (const key in data) {
      if (data[key].isFeatured) parsedData.push({ id: key, ...data[key] });
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

export default HomePage;
