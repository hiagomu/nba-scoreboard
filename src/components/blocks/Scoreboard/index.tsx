import { ScoreboardComponent } from '../../../@types'
import styles from './styles'

const Scoreboard = (team: ScoreboardComponent) => {
    return (
        <div>
            <styles.table>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>MIN</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>BLK</th>
                        <th>STL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.team
                            .sort((a, b) => b.pts - a.pts)
                                .map(player =>
                                    <tr>
                                        <td>{player.player.first_name[0]}. {player.player.last_name}</td>
                                        <td>{player.min}</td>
                                        <td>{player.pts}</td>
                                        <td>{player.reb}</td>
                                        <td>{player.ast}</td>
                                        <td>{player.blk}</td>
                                        <td>{player.stl}</td>
                                    </tr>
                        )
                    }
                </tbody>
            </styles.table>
        </div>
    )
}

export default Scoreboard