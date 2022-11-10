import styles from "./styles"
import api from 'axios'
import { useQuery } from '@tanstack/react-query'
import Event from "../../blocks/Event"
import { useState } from "react"
import {
    GrPrevious as Previous,
    GrNext as Next
} from 'react-icons/gr'

const Events = () => {

    const { data, isError, isLoading } = useQuery(['events'], () => api.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'))
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage, setEventsPerPage] = useState(4)
    const lastEventIndex = currentPage * eventsPerPage
    const firstEventIndex = lastEventIndex - eventsPerPage
    const totalPages = Math.floor(data?.data.events.length / eventsPerPage) + 1

    return (
        <styles.main>
            {
                currentPage > 1 ?
                    <styles.changePage
                        active={true}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <Previous className="icon"/>
                    </styles.changePage>
                    :
                    <styles.changePage active={false}>
                        <Previous className="icon"/>
                    </styles.changePage>
            }
            <styles.wrapEvents>
                {
                    data?.data.events.slice(firstEventIndex, lastEventIndex).map((event: any, key: number) =>
                        <Event
                            key={key}
                            event={event}
                        />
                    )
                }
            </styles.wrapEvents>
            {
                currentPage < totalPages ?
                    <styles.changePage
                        active={true}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <Next className="icon"/>
                    </styles.changePage>
                    :
                    <styles.changePage active={false}>
                        <Next className="icon"/>
                    </styles.changePage>
            }
        </styles.main>
    ) 
}

export default Events