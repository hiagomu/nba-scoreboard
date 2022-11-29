import styles from "./styles"
import api from 'axios'
import { CircularProgress } from '@mui/material'
import Event from "../../blocks/Event"
import { useEffect, useState } from "react"
import {
    GrPrevious as Previous,
    GrNext as Next
} from 'react-icons/gr'
import { useNavigate } from "react-router-dom"

const Events = () => {

    const [data, setData] = useState<any>()
    const [teams, setTeams] = useState<any>()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage, setEventsPerPage] = useState(4)
    const lastEventIndex = currentPage * eventsPerPage
    const firstEventIndex = lastEventIndex - eventsPerPage
    const [progress, setProgress] = useState(0)
    const totalPages =
        Math.ceil(data?.data.events.length / eventsPerPage) === 0 ? 
            1 : Math.ceil(data?.data.events.length / eventsPerPage)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
          }, 800);
      
          return () => {
            clearInterval(timer);
        };
    }, [])

    useEffect(() => {
        const run = async () => {
            const scoreboard = await api.get(import.meta.env.VITE_SCOREBOARD_API_URL)
            const _teams = await api.get(import.meta.env.VITE_TEAMS_API_URL)
            setData(scoreboard)
            setTeams(_teams.data.sports[0].leagues[0].teams)

            setTimeout(run, 10 * 1000)
        }
        run()
    }, [])

    return (
        <styles.main>
            <styles.wrapProgress>
                <CircularProgress variant="determinate" value={progress} />
            </styles.wrapProgress>
            <styles.wrapEvents>
                {
                    data?.data.events.slice(firstEventIndex, lastEventIndex).map((event: any, key: number) =>
                        <Event
                            key={key}
                            event={event}
                            teams={teams}
                            goToMatch={() => navigate(`/match/${event.competitions[0].competitors[0].team.displayName.toLowerCase().replaceAll(" ", "-")}+${event.competitions[0].competitors[1].team.displayName.toLowerCase().replaceAll(" ", "-")}`)}
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