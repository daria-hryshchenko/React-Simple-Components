import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 20px;
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
    width: 240px;
    height: 120px;
    background-color: #ffffff;
    color: #000000;
    border: none;
    border-radius: 10px;
`

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
`
export const Avatar = styled.img`
    width: 48px;
    margin-right: 20px;
`
export const Name = styled.p`
    font-size: 30px;
    font-weight: 200;
`