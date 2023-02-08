import styled from 'styled-components';

export const Card = styled.section`
    background-color: #fff;
    border: none;
    border-radius: 10px;
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 0;
    align-items: center;
    justify-content: center; 
    margin-top: 30px;
    margin-bottom: 30px;
`
export const Avatar = styled.img`
    border-radius: 50%;
   
`
export const Name = styled.p`
   font-size: 24px;
   font-weight: 700;
   line-height: 0.1;
`
export const Tag = styled.p`
    font-size: 14px;
    color: grey;
    line-height: 0.1;
`
export const Location = styled.p`
    font-size: 16px;
    color: grey;
    line-height: 0.1;
`
export const Stats = styled.ul`
    list-style: outside;
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-basis: 33.3%;
`
export const Label = styled.span`
    margin-bottom: 5px;
    text-transform: capitalize;
    font-size: 16px;
    color: gray;
    
`
export const Quantity = styled.span`
    font-weight: 500;
    font-size: 20px;
     
`
export const List = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #F3F6F9;
` 