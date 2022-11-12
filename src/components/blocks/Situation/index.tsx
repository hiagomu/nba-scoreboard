import styles from './styles'

interface ISituation {
    situation: any
    teamLogo: any
}

const Situation: React.FC<ISituation> = ({situation, teamLogo}) => {
    return <styles.wrapSituation>
        <img src={teamLogo} alt="Time na situação atual" />
        <p>{situation}</p>
    </styles.wrapSituation>
}

export default Situation