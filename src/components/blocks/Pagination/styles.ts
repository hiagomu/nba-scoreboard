import styled from "styled-components"

const changePageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;

    @media (max-width: 768px) {
        position: absolute;
        bottom: 0;
        margin-bottom: 1rem;
    }
`

const changePage = styled.div<{active: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.6)': 'rgba(255, 255, 255, 0.3)'};
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.3)'};
    }

    .icon {
        width: 1rem;
        height: 1rem;
    }

    @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;

        .icon {
            width: 0.8rem;
            height: 0.8rem;
        }
    }
`

export default {
    changePageWrapper,
    changePage
}