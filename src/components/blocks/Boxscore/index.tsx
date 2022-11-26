import styles from './styles'

interface IBoxscore {
    boxscore: any
}

const Boxscore: React.FC<IBoxscore> = ({ boxscore }) => {

    console.log(boxscore.away)

    return <styles.main></styles.main>
}

export default Boxscore