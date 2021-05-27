import { useRouter } from 'next/router';

const SearchEventsPage = (): JSX.Element => {
  const {
    query: { slug },
  } = useRouter();

  if (!slug) return null;
  return (
    <div>
      <h1>Event {slug.toString()}</h1>
    </div>
  );
};

export default SearchEventsPage;
