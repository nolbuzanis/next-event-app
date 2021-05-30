import axios from 'axios';

export const getAllEvents = async (): Promise<EventItem[] | {error: unknown}> => {
  try {
    const { data } = await axios.get(
      'https://nextjs-event-app-default-rtdb.firebaseio.com/events.json'
    );

    const parsedData = [];
    for (const key in data) {
      if (data[key].isFeatured) parsedData.push({ id: key, ...data[key] });
    }

    return parsedData;
    
  } catch (error) {
    return { error };
  }
};