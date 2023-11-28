import styled from "styled-components"

const main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const boxscoreContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: start;
    justify-content: center;
    border-radius: 10px;
    background: #202024;
    padding: 30px;
    display: flex;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export default {
    main,
    boxscoreContainer
}