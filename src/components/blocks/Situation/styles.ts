import styled from "styled-components"

const wrapSituation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    height: 3rem;
    width: 80%;

    img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }

    p {
        font-size: 1rem;
        color: #FFFFFF;
        max-width: 16rem;
        max-height: 2rem;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        height: 2rem;
        margin-bottom: 1rem;

        img {
            height: 2rem;
            width: 2rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`

export default {
    wrapSituation
}