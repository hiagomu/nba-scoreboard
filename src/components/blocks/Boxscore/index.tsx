import Points from '../Points'
import Scoreboard from '../Scoreboard'
import styles from './styles'
import { BoxscoreComponent, PlayerStats } from '../../../@types'

const Boxscore: React.FC<BoxscoreComponent> = ({ boxscore, away, home }) => {
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