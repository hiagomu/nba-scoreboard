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

const wrapContent = styled.div`
    display: flex;
`

export default {
    wrapContent,
    main
}