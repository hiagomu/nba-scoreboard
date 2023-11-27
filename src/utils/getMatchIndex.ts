interface MatchIndexProps {
    index: number
    currentPage: number
    eventsPerPage: number
}

export const getMatchIndex = ({ index, currentPage, eventsPerPage }: MatchIndexProps) => {
    return currentPage !== 1 ? index + (eventsPerPage * (currentPage - 1)) : index
}