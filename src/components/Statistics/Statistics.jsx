import styled from 'styled-components';


function Statistics({title, stats}) {
    const listItems = stats.map((el) =>
        <ListItem value={el.id}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
    </ListItem>
  );
    return (
        <Stats>
            <Title>{ title}</Title>
            <StatList>
                {listItems}
            </StatList>
        </Stats>
    );
}

export default Statistics;

const Stats = styled.section``
const Title = styled.h2``
const StatList = styled.ul``
const ListItem = styled.li``
const Label = styled.span``
const Percentage = styled.span``

