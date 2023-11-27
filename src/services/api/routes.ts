import { espnAPI } from '.';

export const routes = {
    getTeams: () => espnAPI.get("/teams"),
    getEvents: () => espnAPI.get("/scoreboard")
};