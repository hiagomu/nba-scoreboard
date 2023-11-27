import { PlayerStats } from '../../pages/Match'
import Points from '../Points'
import Scoreboard from '../Scoreboard'
import styles from './styles'

interface IBoxscore {
    boxscore: PlayerStats[]
    away: string
    home: string
}

const Boxscore: React.FC<IBoxscore> = ({ boxscore, away, home }) => {
    const homeTeam: PlayerStats[] = boxscore.filter(player => player.team.full_name === home)
    const awayTeam: PlayerStats[] = boxscore.filter(player => player.team.full_name === away)

    return <styles.main>
        <Points />
        {
            homeTeam && awayTeam &&
            <styles.boxscoreContainer>
                <Scoreboard team={homeTeam} />
                <Scoreboard team={awayTeam} />
            </styles.boxscoreContainer>
        }
    </styles.main>
}

export default Boxscore