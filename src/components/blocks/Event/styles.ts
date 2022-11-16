import styled from 'styled-components'

const main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #202024;
    width: 29rem;
    height: 21rem;
    border-radius: 0.5rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        width: 19.5rem;
        height: 19.5rem;
    }
`

const containerTeams = styled.div<{done: boolean}>`
    display: flex;
    justify-content: space-between;
    width: 25.5rem;
    margin: 1rem 0;

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
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
            background-color: ${props => props.done ? '' : '#FF0000'};
            color: #FFFFFF;
            font-weight: bold;
        }

        .time {
            font-size: 1rem;
            text-align: center;
            color: #00FF00;
        }

        .points {
            font-family: 'Righteous', cursive;
            font-size: 1.75rem;
            color: #FFFFFF;
        }
    }

    @media (max-width: 768px) {
        width: 19rem;
        margin: 1rem 0 0 0;
        height: 8.5rem;

        .team {
            img {
                height: 5rem;
                width: 5rem;
            }
            
            h2 {
                font-size: 1rem;
            }

            p {
                font-size: 0.6rem;
            }
        }

        .score {

            .time {
                font-size: 0.9rem;
            }

            .points {
                font-size: 1.5rem;
            }
        }
    }
`

const detailsButton = styled.button`
    border: none;
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 0.25rem;
    background-color: #503295;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #5B36B2;
    }

    @media (max-width: 768px) {
        font-size: 0.65rem;
        padding: 0.4rem 0.8rem;
    }
`

export default {
    main,
    containerTeams,
    detailsButton
}