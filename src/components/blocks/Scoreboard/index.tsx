import { Models, ScoreboardComponent } from '../../../@types'
import styles from './styles'

const Scoreboard = (team: ScoreboardComponent) => {
    return (
        <div>
            <styles.table>
                <thead>
                    <tr>
                        <th>Starters</th>
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
                        team.team.slice(0, 5).map(player =>
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
            <styles.table>
                <thead>
                    <tr>
                        <th>Bench</th>
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
                        team.team.slice(5, 10).map(player =>
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