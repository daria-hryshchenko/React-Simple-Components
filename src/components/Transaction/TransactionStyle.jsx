import styled from "styled-components";

export const Table = styled.table`
    margin: 20px auto 0 auto;
    width: 400px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 10px;
    background-color: #d5e3d1;
    box-shadow: 0 0 10px 1px grey;
`
export const Head = styled.thead`
    background-color:#00BCD5;
`
export const Row = styled.tr`
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    color: white;
`
export const HeaderCell = styled.th`
    width: calc(100% / 3);
`
export const Body = styled.tbody`
    color: #000;
`
export const BodyCell = styled.td`
    height: 40px;
    text-align: center;
    text-transform: capitalize;
`

export const RowBody = styled.tr`
    &:nth-child(even){
        background-color: #ecf1f4;
    }

    &:nth-child(odd) {
    background-color: #fffdfe;
    }   
`