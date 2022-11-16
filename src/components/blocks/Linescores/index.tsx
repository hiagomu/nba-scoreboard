import styles from './styles'

interface ILinescores {
    teams: any
}

const Linescores: React.FC<ILinescores> = ({teams}) => {

    return <styles.containerLinescore>
        <styles.containerScore>
            <p>Team</p>
            <ol>
                {
                    teams[0].linescores.map((line: any, index: number) => <li>{index + 1}</li>)
                }
                <li>T</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[0].team.displayName}</p>
            <ol>
                {
                    teams[0].linescores.map((line: any) => <li>{line.value}</li>)
                }
                <li>{teams[0].score}</li>
            </ol>
        </styles.containerScore>
        <styles.containerScore>
            <p className='team'>{teams[1].team.displayName}</p>
            <ol>
                {
                    teams[1].linescores.map((line: any) => <li>{line.value}</li>)
                }
                <li>{teams[1].score}</li>
            </ol>
        </styles.containerScore>
    </styles.containerLinescore>
}

export default Linescores