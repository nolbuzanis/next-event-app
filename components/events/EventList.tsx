import EventItem from './EventItem';
import classes from './EventList.module.css';

interface EventListProps {
  items: EventItem[];
}

const EventList = ({ items }: EventListProps): JSX.Element => {
  return (
    <ul className={classes.list}>
      {items.map(
        ({ id, title, date, location, image, isFeatured, description }) => (
          <EventItem
            key={id}
            id={id}
            date={date}
            description={description}
            location={location}
            title={title}
            image={image}
            isFeatured={isFeatured}
          />
        )
      )}
    </ul>
  );
};

export default EventList;
