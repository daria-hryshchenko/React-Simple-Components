import { Stats, Title, StatList, ListItem, Label, Percentage } from './StatisticsStyle'; 


function Statistics({ stats, title }) {
    function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
    const listItems = stats.map((el) =>
        <ListItem key={el.id} style={{ backgroundColor: randomHexColor() }}>
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



