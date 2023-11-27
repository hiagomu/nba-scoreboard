import styled from "styled-components"

const main = styled.div`
    display: flex;
    color: black;
`

const table = styled.table`
    color: white;

    th {
        font-family: Roboto;
        text-align: center;
        padding: 5px;
        color: #FFF;

        &:first-child {
            font-size: 24px;
            font-weight: 700;
            text-align: start;
        }
    }
    
    td {
        font-family: Roboto;
        font-size: 18px;
        border-top: 1px solid white;
        text-align: center;
        color: #FFF;
        padding: 10px;
        color: #FFF;

        &:first-child {
            text-align: start;
            font-size: 22px;
            width: 250px;
        }
    }
`

export default {
    main,
    table
}