import styles from './styles'

interface IEvent {
    event: any
}

const Event: React.FC<IEvent> = ({event}) => {

    const teams = event.competitions[0].competitors
    
    return <styles.main>
        <styles.containerTeams>
            <div className='team'>
                <img src={teams[0].team.logo} alt="Logo do Dallas Mavericks" />
                <h2>{teams[0].team.name}</h2>
                <p>
                    ({teams[0].records[0].summary}, {teams[0].homeAway === 'home' ? 
                        teams[0].records[2].summary
                        : teams[0].records[1].summary} {teams[0].homeAway === 'home' ? 'Home' : 'Away'})
                </p>
            </div>
            <div className='score'>
                <span>{event.status.type.completed ? 'FINAL' : 'LIVE'}</span>
                <p>{teams[0].score}-{teams[1].score}</p>
            </div>
            <div className='team'>
                <img src={teams[1].team.logo} alt="Logo do Orlando Magic" />
                <h2>{teams[1].team.name}</h2>
                <p>
                    ({teams[1].records[0].summary}, {teams[1].homeAway === 'home' ? 
                        teams[1].records[2].summary
                        : teams[1].records[1].summary} {teams[1 ].homeAway === 'home' ? 'Home' : 'Away'})
                </p>
            </div>
        </styles.containerTeams>
    </styles.main>
}

export default Event