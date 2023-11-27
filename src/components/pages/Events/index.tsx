import styles from "./styles"
import Event from "../../blocks/Event"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useGetEvents from "../../../services/queries/useGetEvents"
import useGetTeams from "../../../services/queries/useGetTeams"
import { Pagination } from "../../blocks/Pagination"
import { RefetchProgrss } from "../../blocks/RefetchProgress"
import { getMatchIndex } from "../../../utils/getMatchIndex"
import { Event as EventProps } from "../../../@types"

export const Events = () => {
    const navigate = useNavigate()
    const { data: events, isLoading: isLoadingEvents } = useGetEvents();
    const { data: teams, isLoading: isLoadingTeams } = useGetTeams();
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage] = useState(4)
    const lastEventIndex = currentPage * eventsPerPage
    const firstEventIndex = lastEventIndex - eventsPerPage
    const totalPages =
        Math.ceil(events?.length / eventsPerPage) === 0 ? 
            1 : Math.ceil(events?.length / eventsPerPage)

    return (
        <styles.main>
            <RefetchProgrss />
            <styles.wrapEvents>
                {
                    events?.slice(firstEventIndex, lastEventIndex)
                        .map((event: EventProps, index: number) =>
                            <Event
                                key={index}
                                event={event}
                                teams={teams}
                                goToMatch={() =>
                                    navigate(`/match/${getMatchIndex({
                                        currentPage,
                                        eventsPerPage,
                                        index
                                    })}`)
                                }
                            />
                    )
                }
            </styles.wrapEvents>
            <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </styles.main>
    ) 
}