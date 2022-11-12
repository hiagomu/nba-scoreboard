import styles from "./styles"
import api from 'axios'
import Event from "../../blocks/Event"
import { useEffect, useState } from "react"
import {
    GrPrevious as Previous,
    GrNext as Next
} from 'react-icons/gr'

const Events = () => {

    const [data, setData] = useState<any>()
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage, setEventsPerPage] = useState(4)
    const lastEventIndex = currentPage * eventsPerPage
    const firstEventIndex = lastEventIndex - eventsPerPage
    const totalPages =
        Math.ceil(data?.data.events.length / eventsPerPage) === 0 ? 
            1 : Math.ceil(data?.data.events.length / eventsPerPage)

    useEffect(() => {
        const run = async () => {
            const response = await api.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
            setData(response)

            setTimeout(run, 10 * 1000)
        }
        run()
    }, [])


    return (
        <styles.main>
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
            <styles.changePageWrapper>
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
            </styles.changePageWrapper>

        </styles.main>
    ) 
}

export default Events