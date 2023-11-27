import { useQuery } from 'react-query';
import { routes } from '../api/routes';

const eventsQueryKey = "events"

const getEvents = async () => {
  const res = await routes.getEvents();
  return res.data.events;
};

const useGetEvents = () =>
  useQuery(
    eventsQueryKey,
    getEvents,
    {
        refetchInterval: 10 * 1000
    }
  );

export default useGetEvents;