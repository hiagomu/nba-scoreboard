import Linescores from '../Linescores'
import Situation from '../Situation'
import styles from './styles'

interface IEvent {
    event: any
}

const Event: React.FC<IEvent> = ({event}) => {

    const teams = event.competitions[0].competitors

    console.log(event)
    //console.log(event.competitions[0].situation ? event.competitions[0].situation.lastPlay.team.id : '')

    return <styles.main>
        <styles.containerTeams
            done={event.status.type.name === 'STATUS_IN_PROGRESS' || event.status.type.name === 'STATUS_HALFTIME' ? false : true}
        >
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
                {
                    event.status.type.name !== 'STATUS_SCHEDULED' &&
                    <span>
                        {
                        event.status.type.name === 'STATUS_IN_PROGRESS' || event.status.type.name === 'STATUS_HALFTIME' ?
                            'LIVE' : 'FINAL'
                        }
                    </span>
                }
                <p className='time'>{event.status.type.detail.includes('Final') ? '':  event.status.type.detail}</p>
                <p className='points'>{teams[0].score}-{teams[1].score}</p>
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
        {
            event.competitions[0].situation
            &&
            <Situation
                situation={event.competitions[0].situation.lastPlay.text}
                teamLogo={teams[0].team.logo}
            />
        }
        {
            teams[0].linescores && <Linescores teams={teams}/>
        }
    </styles.main>
}

export default Event