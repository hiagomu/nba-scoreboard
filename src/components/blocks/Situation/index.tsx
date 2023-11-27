import styles from './styles'
import { Models, SituationComponent } from '../../../@types'

const Situation: React.FC<SituationComponent> = ({situation, teamLogo}) => {

    return <styles.wrapSituation>
        {
            teamLogo && <img src={teamLogo} alt="Time na situação atual" />
        }
        <p>{situation}</p>
    </styles.wrapSituation>
}

export default Situation