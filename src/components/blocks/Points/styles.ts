import styled from "styled-components"

const main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 237px;
    border-radius: 10px;
    background: #202024;
    
    @media (max-width: 1024px) {
        height: 160px;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        height: 120px;
    }
    
`

const containerTeams = styled.div<{done: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    .team {
        font-family: Roboto;
        display: flex;
        gap: 10px;
        align-items: center;
        height: 9rem;

        img {
            height: 9rem;
            width: 9rem;
        }

        h2 {
            font-size: 1.75rem;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
        }

        p {
            margin-top: 0.25rem;
            font-size: 18px;
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
        margin: 0 50px;
        font-family: Roboto;

        span {
            font-size: 1.5rem;
            font-weight: bold;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
            margin-bottom: 0.5rem;
            background-color: ${props => props.done ? '' : '#FF0000'};
            color: #FFFFFF;
            font-weight: bold;
        }

        .time {
            font-size: 1.5rem;
            text-align: center;
            color: #00FF00;
        }

        .points {
            font-family: 'Righteous', cursive;
            font-size: 3rem;
            color: #FFFFFF;
        }

    }

    @media (max-width: 1024px) {
        width: fit-content;
        margin: 1rem 0 0 0;
        height: 8.5rem;

        .team {
            img {
                height: 6.5rem;
                width: 6.5rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }

            p {
                font-size: 0.8rem;
            }
        }

        .score {
            margin: 0 30px;

            .time {
                font-size: 1.2rem;
            }

            .points {
                font-size: 1.8rem;
            }
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

export default {
    main,
    containerTeams
}