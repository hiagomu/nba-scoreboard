import styled from "styled-components"
import background from '../../../assets/background-gradient.png'

const main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`

const wrapEvents = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 2rem;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;
    height: 90vh;
`

const changePage = styled.div<{active: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.6)': 'rgba(255, 255, 255, 0.3)'};
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.3)'};
    }

    .icon {
        width: 1.25rem;
        height: 1.25rem;
    }
`

export default {
    main,
    wrapEvents,
    changePage
}