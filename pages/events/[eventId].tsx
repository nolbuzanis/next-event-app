import { useRouter } from 'next/router';

const EventPage = (): JSX.Element => {
  const {
    query: { eventId },
  } = useRouter();
  return (
    <div>
      <h1>Event with id: {eventId}</h1>
    </div>
  );
};

export default EventPage;
