import Boxscore from '../../blocks/Boxscore'
import styles from './styles'
import api from 'axios'
import { useEffect, useState } from 'react'

const Match: React.FC = () => {
    const matchId = location.href.split('/')[4].split('+').sort().join('-')
    const [boxscore, setBoxscore] = useState<any>()

    useEffect(() => {
        (async() => {
            const response = await api.get('https://api.sofascore.com/api/v1/sport/basketball/scheduled-events/2022-11-20')
            setBoxscore(response.data.events.slice(0, 10).find((item: any) => item.slug === matchId))
        })()
    }, [])

    return <styles.main>
        <p>{boxscore?.awayScore.display} - {boxscore?.homeScore.display}</p>
        <Boxscore />
    </styles.main>
}

export default Match