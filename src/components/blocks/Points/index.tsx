import { useEffect, useState } from 'react'
import styles from './styles'
import { useParams } from 'react-router-dom';
import api from 'axios'
import { getTimeLeft } from '../../../utils/getTimeLeft';

const Points = () => {
    const [event, setEvent] = useState<any>()
    const { id } = useParams();
    const teamsAttending = event?.competitions[0].competitors

    useEffect(() => {
        const run = async () => {
            const response = await api.get(import.meta.env.VITE_SCOREBOARD_API_URL)
            setEvent(response.data.events[Number(id)])

            setTimeout(run, 10 * 1000)
        }
        run()
    }, [])

    return (
        <styles.main>
            {
                event &&
                <styles.containerTeams
                    done={event.status.type.name === 'STATUS_IN_PROGRESS' || event.status.type.name === 'STATUS_HALFTIME' ? false : true}
                >
                    <div className='team'>
                        <img src={teamsAttending[0].team.logo} alt="Logo" />
                        <div>
                            <h2>{teamsAttending[0].team.displayName}</h2>
                            <p>
                                ({teamsAttending[0].records[0].summary}, {teamsAttending[0].homeAway === 'home' ? 
                                    teamsAttending[0].records[2].summary
                                    : teamsAttending[0].records[1].summary} {teamsAttending[0].homeAway === 'home' ? 'Home' : 'Away'})
                            </p>
                        </div>
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
                        <p className='time'>{event.status.type.name == 'STATUS_SCHEDULED' ? getTimeLeft(event.date) : event.status.type.detail.includes('Final') ? '': event.status.type.detail}</p>
                        <p className='points'>{teamsAttending[0].score}-{teamsAttending[1].score}</p>
                    </div>
                    <div className='team'>
                        <div>
                            <h2>{teamsAttending[1].team.displayName}</h2>
                            <p>
                                ({teamsAttending[1].records[0].summary}, {teamsAttending[1].homeAway === 'home' ? 
                                    teamsAttending[1].records[2].summary
                                    : teamsAttending[1].records[1].summary} {teamsAttending[1 ].homeAway === 'home' ? 'Home' : 'Away'})
                            </p>
                        </div>
                        <img src={teamsAttending[1].team.logo} alt="Logo" />
                    </div>
                </styles.containerTeams>
            }
        </styles.main>
    )
}

export default Points