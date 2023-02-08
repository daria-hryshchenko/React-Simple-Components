import styled from 'styled-components';

export const Stats = styled.section`
    width: 350px;
    margin: 0 auto;
    padding: 50px 20px;
`
export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: #000000;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
`
export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
`
export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 0;
    text-align: center;
    font-size: 16px;
    color: #f3f3f3;
    width: 70px;
    padding: 10px 0;
    gap: 5px;
`
export const Label = styled.span`
    font-size: 14px;
`
export const Percentage = styled.span`
    font-size: 24px;
`