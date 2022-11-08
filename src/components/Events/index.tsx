import styles from './styles'
import { useState } from 'react'
import api from 'axios'
import { useQuery } from '@tanstack/react-query'

const Events: React.FC = () => {
    const { data, isError, isLoading } = useQuery(['events'], () => api.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'))
    console.log(data?.data.events)

    return <styles.main></styles.main>
}

export default Events