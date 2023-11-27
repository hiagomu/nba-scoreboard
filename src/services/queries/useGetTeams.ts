import { useQuery } from 'react-query';
import { routes } from '../api/routes';

const teamsQueryKey = "teams"

const getTeams = async () => {
  const res = await routes.getTeams();
  return res.data.sports[0].leagues[0].teams;
};

const useGetTeams = () =>
  useQuery(
    teamsQueryKey,
    getTeams
);

export default useGetTeams;