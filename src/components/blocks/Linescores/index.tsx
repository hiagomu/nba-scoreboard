import styles from './styles'
import { LinescoresComponent } from '../../../@types'

const Linescores: React.FC<LinescoresComponent> = ({teams}) => {
    return <styles.containerLinescore>
        <styles.containerScore>
            <p>Team</p>
            <ol>
                {
                    teams[0].linescores?.map((line, index: number) => <li key={index}>{index + 1}</li>)
                }
                <li>T</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[0].team.displayName}</p>
            <ol>
                {
                    teams[0].linescores?.map((line, index) => <li key={index}>{line.value}</li>)
                }
                <li>{teams[0].score}</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[1].team.displayName}</p>
            <ol>
                {
                    teams[1].linescores?.map((line, index) => <li key={index}>{line.value}</li>)
                }
                <li>{teams[1].score}</li>
            </ol>
        </styles.containerScore>
    </styles.containerLinescore>
}

export default Linescores