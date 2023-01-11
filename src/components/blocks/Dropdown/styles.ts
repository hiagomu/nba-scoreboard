import styled from "styled-components"

const main = styled.div<{isActive: boolean}>`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 0;
    margin: 1rem 0 0 1rem;
    
    nav {
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding: 1.5rem 1.5rem 1rem 1.5rem;
        background: #202024;
        width: 8rem;
        margin-top: 0.25rem;
        border-radius: 0.5rem;
    }

    a {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }
    
    span {
        border-radius: 50%;
        cursor: pointer;
        padding: 0.5rem;
        width: 1.5rem;
        background-color: ${props => props.isActive ? "#202024": ""}; 

        .icon {
            height: 1.5rem;
            width: 1.5rem;
            color: #fff;
        }


        &:hover {
            background-color: #202024;
        }
    }
`

const socialLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 5rem;
    border-top: 2px solid #fff;
    padding-top: 1rem;
    width: 8rem;

    a {
        margin: 0;
    }

    .social-icon {
        height: 1.25rem;
        width: 1.25rem;
    }

    .twitter-icon {
        &:hover {
            color: #50a5e6;
        }
    }
`

export default {
    main,
    socialLinks
}