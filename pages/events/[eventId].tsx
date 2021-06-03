import { useRouter } from 'next/router';

import EventSummary from '../../components/events/EventSummary';
import EventLogistics from '../../components/events/EventLogistics';
import EventContent from '../../components/events/EventContent';
import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllEvents } from '../../utils/api';

const EventPage = (props): JSX.Element => {
  // const {
  //   query: { eventId },
  // } = useRouter();

  // const event = getEventById(eventId as string);

  if (!props.event) {
    return <p>No event found!</p>;
  }

  const { title, description, date, location, image } = props.event;

  return (
    <Fragment>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getAllEvents();
  if ('error' in events)
    return {
      paths: [''],
      fallback: false,
    };
  const idsInParams = events.map(({ id }) => ({
    params: { eventId: id },
  }));

  return {
    paths: idsInParams,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { eventId } = params;

  const events = await getAllEvents();

  if ('error' in events) return { notFound: true };

  const event = events.find(({ id }) => id === eventId);

  return {
    props: {
      event,
    },
    revalidate: 60,
  };
};

export default EventPage;
