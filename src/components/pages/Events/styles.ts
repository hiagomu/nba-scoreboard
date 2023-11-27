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
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (max-width: 768px) {
        justify-content: flex-start;
        min-height: 100vh;
        height: fit-content;
        overflow: visible;
        background-image: none;
        background-image: url(${backgroundMobile});
        position: relative;
    }
`

const wrapEvents = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem 2rem;
    align-items: center;
    flex-wrap: wrap;
    width: 75vw;
    height: 90vh;
    overflow: auto;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        margin: 1rem 0 4rem 0;
        height: fit-content;
        gap: 1rem;
    }
`

const wrapProgress = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin: 1rem 1rem 0 0;
`

export default {
    main,
    wrapEvents,
    wrapProgress
}