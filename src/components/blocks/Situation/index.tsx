import styles from './styles'

interface ISituation {
    situation: string
    teamLogo: string
}

const Situation: React.FC<ISituation> = ({situation, teamLogo}) => {

    return <styles.wrapSituation>
        {
            teamLogo && <img src={teamLogo} alt="Time na situação atual" />
        }
        <p>{situation}</p>
    </styles.wrapSituation>
}

export default Situation