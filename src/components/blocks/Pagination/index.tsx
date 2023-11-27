import styles from "./styles"
import { GrPrevious as Previous, GrNext as Next } from 'react-icons/gr'

interface PaginationProps {
    currentPage: number
    totalPages: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
    return (
        <styles.changePageWrapper>
            {
                currentPage > 1 ?
                    <styles.changePage
                        active={true}
                        onClick={() => setCurrentPage(prev => prev - 1)}
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
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        <Next className="icon"/>
                    </styles.changePage>
                    :
                    <styles.changePage active={false}>
                        <Next className="icon"/>
                    </styles.changePage>
            }
        </styles.changePageWrapper>
    )
}