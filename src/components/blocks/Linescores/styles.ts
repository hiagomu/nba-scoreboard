import styled from "styled-components";

const containerLinescore = styled.div`
    width: 23.75rem;
    height: 4.5rem;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;

    @media (max-width: 768px) {
        width: 17rem;
        height: 4rem;
    }
`

const containerScore = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    margin-top: 0.5rem;
    font-size: 0.8rem;

    ol {
        display: flex;
        justify-content: space-between;
        width: 10rem;
    }

    li {
        width: 1.75rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
`

export default {
    containerLinescore,
    containerScore
}