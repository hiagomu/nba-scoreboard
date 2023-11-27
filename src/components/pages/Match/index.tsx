import { useParams } from 'react-router-dom';
import Boxscore from '../../blocks/Boxscore'
import styles from './styles'
import api from 'axios'
import { useEffect, useState } from 'react'

interface Competitor {
    homeAway: string;
    team: {
        displayName: string;
    };
}

interface Competitors {
    home: string;
    away: string;
}

interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

interface Game {
    id: number;
    date: string;
    home_team: Team;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Team;
    visitor_team_score: number;
}

export interface PlayerStats {
    id: number;
    ast: number;
    blk: number;
    dreb: number;
    fg3_pct: number;
    fg3a: number;
    fg3m: number;
    fg_pct: number;
    fga: number;
    fgm: number;
    ft_pct: number;
    fta: number;
    ftm: number;
    game: {
        id: number;
        date: string;
        home_team_id: number;
        home_team_score: number;
        period: number;
        postseason: boolean;
        season: number;
        status: string;
        time: string | null;
        visitor_team_id: number;
        visitor_team_score: number;
    };
    min: string;
    oreb: number;
    pf: number;
    player: {
        id: number;
        first_name: string;
        height_feet: number;
        height_inches: number;
        last_name: string;
        position: string;
        team_id: number;
        weight_pounds: number;
    };
    pts: number;
    reb: number;
    stl: number;
    team: {
        id: number;
        abbreviation: string;
        city: string;
        conference: string;
        division: string;
        full_name: string;
        name: string;
    };
    turnover: number;
}

const Match: React.FC = () => {
    const [boxscore, setBoxscore] = useState<PlayerStats[]>()
    const date = new Date()
    const fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` //atenção aqui no dia
    const [gameId, setGameId] = useState<number>()
    const { id } = useParams();
    const [competitors, setCompetitors] = useState<Competitors>()
    
    useEffect(() => {
        (async() => {
            const response = await api.get(`${import.meta.env.VITE_SCOREBOARD_API_URL}`)
            const competitors = response.data.events[Number(id)].competitions[0].competitors;
            
            const result: Competitors = competitors.reduce((acc: Competitors, team: Competitor) => {
                if (team.homeAway === 'home') {
                    acc.home = team.team.displayName;
                } else if (team.homeAway === 'away') {
                    acc.away = team.team.displayName;
                }
                return acc;
            }, {});

            setCompetitors(result)
            
            const gamesDataResponse = await api.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2023&start_date=${fullDate}&end_date=${fullDate}&per_page=100`)
            const games  = gamesDataResponse.data.data
            const gameID = games.find((game: Game) => game.home_team.full_name === result.home && game.visitor_team.full_name === result.away)?.id;
            console.log(gameID)
            setGameId(gameID)
        })()
    }, [])

    useEffect(() => {
        (async() => {
            if (gameId) {
                const result = await api.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=100`)
                const boxScoreStats: PlayerStats[] = result.data.data
                setBoxscore(boxScoreStats)
            } 
        })()
    }, [gameId])

    return <styles.main>
        {
            boxscore && competitors &&
            <Boxscore
                boxscore={boxscore}
                home={competitors.home}
                away={competitors.away}
            />
        }
    </styles.main>
}

export default Match