import { MatchIndex } from "../@types"

export const getMatchIndex = ({ index, currentPage, eventsPerPage }: MatchIndex) => {
    return currentPage !== 1 ? index + (eventsPerPage * (currentPage - 1)) : index
}