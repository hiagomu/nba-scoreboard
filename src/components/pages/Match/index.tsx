import Boxscore from '../../blocks/Boxscore'
import styles from './styles'
import api from 'axios'
import { useEffect, useState } from 'react'

const Match: React.FC = () => {
    const [boxscore, setBoxscore] = useState<any>()
    const date = new Date()
    const fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const matchId = location.href.split('/')[4].split('+').sort().join('-')

    useEffect(() => {
        (async() => {
            const response = await api.get(`${import.meta.env.VITE_GAMES_API_URL}${fullDate}`)
            const gameId = response.data.events.slice(0, 10).find((item: any) => item.slug === matchId).id
            const boxscoreData = await api.get(`${import.meta.env.VITE_BOXSCORE_API_URL}${gameId}/lineups`)
            setBoxscore(boxscoreData.data)
        })()
    }, [])


    return <styles.main>
        <Boxscore
            boxscore={boxscore}
        />
    </styles.main>
}

export default Match