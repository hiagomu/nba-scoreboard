import styled from 'styled-components'
import { FaAngleRight } from "react-icons/fa"

const main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #202024;
    width: 29rem;
    height: 21rem;
    border-radius: 0.5rem;
    font-family: 'Roboto', sans-serif;
    position: relative;

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

const linkButton = styled.a`
    border: none;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 0.25rem;
    background-color: #503295;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #5B36B2;
    }

    @media (max-width: 768px) {
        font-size: 0.65rem;
        padding: 0.4rem 0.8rem;
    }
`

const container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 5px 20px;
    width: 75%;

    h3 {
        font-weight: bold;
        color: #FFF;
        margin: 5px 0 5px 0;
    }
`

const playerContainer = styled.div`
    display: flex;
    padding: 5px;
    gap: 5px;

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 1px solid #DDD;
        object-fit: cover;
    }
`

const playerInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px 0;
    
    span, p {
        color: #FFF;
    }

    p {
        font-size: 0.75rem;
    }

`

const containerDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 10px 10px 0 0;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`

const iconDetails = styled(FaAngleRight)`
    color: #FFF;
`

export default {
    main,
    containerTeams,
    detailsButton,
    linkButton,
    container,
    playerContainer,
    playerInfos,
    containerDetails,
    iconDetails
}