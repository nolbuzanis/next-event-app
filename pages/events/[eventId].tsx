import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/EventSummary';
import EventLogistics from '../../components/events/EventLogistics';
import EventContent from '../../components/events/EventContent';
import { Fragment } from 'react';

const EventPage = (): JSX.Element => {
  const {
    query: { eventId },
  } = useRouter();

  const event = getEventById(eventId as string);

  if (!event) {
    return <p>No event found!</p>;
  }

  const { title, description, date, location, image } = event;

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

export default EventPage;
