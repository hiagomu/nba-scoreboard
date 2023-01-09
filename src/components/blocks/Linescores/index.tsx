import styles from './styles'
import { Models } from '../../../@types'

const Linescores: React.FC<Models.Linescores> = ({teams}) => {

    console.log(teams[0].linescores[0].value)

    return <styles.containerLinescore>
        <styles.containerScore>
            <p>Team</p>
            <ol>
                {
                    teams[0].linescores.map((line, index: number) => <li>{index + 1}</li>)
                }
                <li>T</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[0].team.displayName}</p>
            <ol>
                {
                    teams[0].linescores.map(line => <li>{line.value}</li>)
                }
                <li>{teams[0].score}</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[1].team.displayName}</p>
            <ol>
                {
                    teams[1].linescores.map(line => <li>{line.value}</li>)
                }
                <li>{teams[1].score}</li>
            </ol>
        </styles.containerScore>
    </styles.containerLinescore>
}

export default Linescores