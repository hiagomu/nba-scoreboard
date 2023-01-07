import styled from "styled-components"

const main = styled.div<{isActive: boolean}>`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 0;
    margin: 1rem 0 0 1rem;;
    
    nav {
        display: flex;
        flex-direction: column;
        height: fit-content;
    }

    a {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        margin-top: 1rem;
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

export default {
    main
}