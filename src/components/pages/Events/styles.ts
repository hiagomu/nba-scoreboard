import styled from "styled-components"
import background from '../../../assets/background-gradient.png'
import backgroundMobile from '../../../assets/background-mobile.png'

const main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${background});
    background-image: url(${backgroundMobile});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 85rem;
        overflow: visible;
        background-image: none;
        background-image: url(${backgroundMobile});
    }
`

const wrapEvents = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 2rem;
    align-items: center;
    flex-wrap: wrap;
    width: 75vw;
    height: 90vh;

    @media (max-width: 768px) {
        height: fit-content;
        gap: 1rem;
    }
`

const changePageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
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
    main,
    wrapEvents,
    changePageWrapper,
    changePage
}