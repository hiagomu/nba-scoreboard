import styles from './styles'
import { Models } from '../../../@types'

const Situation: React.FC<Models.Situation> = ({situation, teamLogo}) => {

    return <styles.wrapSituation>
        {
            teamLogo && <img src={teamLogo} alt="Time na situação atual" />
        }
        <p>{situation}</p>
    </styles.wrapSituation>
}

export default Situation