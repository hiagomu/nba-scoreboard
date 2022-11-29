import Boxscore from '../../blocks/Boxscore'
import styles from './styles'
import api from 'axios'
import { useEffect, useState } from 'react'

const Match: React.FC = () => {
    const [boxscore, setBoxscore] = useState<any>()
    const date = new Date()
    const fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const urlIdSorted = location.href.split('/')[4].split('+').sort()
    const matchId = urlIdSorted.join('-')
    const reversedMatchId = `${urlIdSorted[1]}-${urlIdSorted[0]}`
    const [gameId, setGameId] = useState<number>()

    useEffect(() => {
        (async() => {
            const response = await api.get(`${import.meta.env.VITE_GAMES_API_URL}${fullDate}`)
            const games = await response.data.events.filter((item: any) => item.tournament.name === 'NBA')
            const _gameId = games.find((item: any) => item.slug === matchId)?.id ?? games.find((item: any) => item.slug === reversedMatchId).id
            setGameId(_gameId)
        })()
    }, [])

    useEffect(() => {
        (async() => {
            if (gameId) {
                const response = await api.get(`${import.meta.env.VITE_BOXSCORE_API_URL}${gameId}/lineups`)
                setBoxscore(response.data)
            } 
        })()
    }, [gameId])


    return <styles.main>
        <Boxscore
            boxscore={boxscore}
        />
    </styles.main>
}

export default Match