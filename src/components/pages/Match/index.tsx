import { useParams } from 'react-router-dom';
import Boxscore from '../../blocks/Boxscore'
import styles from './styles'
import api from 'axios'
import { useEffect, useState } from 'react'
import { BDL, PlayerStats } from '../../../@types';

const Match: React.FC = () => {
    const [boxscore, setBoxscore] = useState<PlayerStats[]>()
    const date = new Date()
    const fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` //atenção aqui no dia
    const [gameId, setGameId] = useState<number>()
    const { id } = useParams();
    const [competitors, setCompetitors] = useState<BDL.Competitors>()
    
    useEffect(() => {
        (async() => {
            const response = await api.get(`${import.meta.env.VITE_SCOREBOARD_API_URL}`)
            const competitors = response.data.events[Number(id)].competitions[0].competitors;
            
            const result: BDL.Competitors = competitors.reduce((acc: BDL.Competitors, team: BDL.Competitor) => {
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
            const gameID = games.find((game: BDL.Game) => game.home_team.full_name === result.home && game.visitor_team.full_name === result.away)?.id;
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