import styled from 'styled-components'

const main = styled.div`
    display: flex;
    justify-content: center;
    background-color: #202024;
    width: 29rem;
    height: 19rem;
    border-radius: 0.5rem;
    font-family: 'Roboto', sans-serif;
`

const containerTeams = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25.5rem;
    margin-top: 1rem;

    .team {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 9rem;
        width: 9rem;

        img {
            height: 6.25rem;
            width: 6.25rem;
        }

        h2 {
            margin-top: 0.25rem;
            font-size: 1.25rem;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
        }

        p {
            margin-top: 0.25rem;
            font-size: 0.75rem;
            text-align: center;
            color: #DDDDDD;
        }
    }

    .score {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 6.5rem;
        width: 7.125rem;

        span {
            font-size: 1rem;
            font-weight: bold;
            padding: 0.25rem 0.5rem;
            background-color: #FF0000;
            color: #FFFFFF;
            font-weight: bold;
        }

        p {
            font-family: 'Righteous', cursive;
            font-size: 1.75rem;
            color: #FFFFFF;
        }
    }
`

export default {
    main,
    containerTeams
}