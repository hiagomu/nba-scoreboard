import Linescores from '../Linescores'
import Situation from '../Situation'
import styles from './styles'

interface IEvent {
    event: any
    teams: any
}

const Event: React.FC<IEvent> = ({event, teams}) => {

    const teamsAttending = event.competitions[0].competitors

    return <styles.main>
        <styles.containerTeams
            done={event.status.type.name === 'STATUS_IN_PROGRESS' || event.status.type.name === 'STATUS_HALFTIME' ? false : true}
        >
            <div className='team'>
                <img src={teamsAttending[0].team.logo} alt="Logo do Dallas Mavericks" />
                <h2>{teamsAttending[0].team.name}</h2>
                <p>
                    ({teamsAttending[0].records[0].summary}, {teamsAttending[0].homeAway === 'home' ? 
                        teamsAttending[0].records[2].summary
                        : teamsAttending[0].records[1].summary} {teamsAttending[0].homeAway === 'home' ? 'Home' : 'Away'})
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
                <p className='points'>{teamsAttending[0].score}-{teamsAttending[1].score}</p>
            </div>
            <div className='team'>
                <img src={teamsAttending[1].team.logo} alt="Logo do Orlando Magic" />
                <h2>{teamsAttending[1].team.name}</h2>
                <p>
                    ({teamsAttending[1].records[0].summary}, {teamsAttending[1].homeAway === 'home' ? 
                        teamsAttending[1].records[2].summary
                        : teamsAttending[1].records[1].summary} {teamsAttending[1 ].homeAway === 'home' ? 'Home' : 'Away'})
                </p>
            </div>
        </styles.containerTeams>
        {
            event.competitions[0].situation
            &&
            <Situation
                situation={event.competitions[0].situation.lastPlay.text}
                teamLogo={
                    event.competitions[0].situation.lastPlay.team ?
                        teams.find((team: any) => team.team.id === event.competitions[0].situation.lastPlay.team.id).team.logos[0].href
                        : null
                }
            />
        }
        {
            teamsAttending[0].linescores && <Linescores teams={teamsAttending}/>
        }
    </styles.main>
}

export default Event