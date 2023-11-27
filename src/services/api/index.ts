import axios from "axios"

export const balldontlieAPI = axios.create({
    baseURL: "https://www.balldontlie.io/api/v1/"
})

export const espnAPI = axios.create({
    baseURL: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/"
})