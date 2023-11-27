import { Models, PaginationComponent } from "../../../@types"
import styles from "./styles"
import { GrPrevious as Previous, GrNext as Next } from 'react-icons/gr'

export const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationComponent) => {
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