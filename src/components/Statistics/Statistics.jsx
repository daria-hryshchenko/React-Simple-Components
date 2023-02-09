import { Stats, Title, StatList, ListItem, Label, Percentage } from './StatisticsStyle'; 
import PropTypes from "prop-types";

function Statistics({ stats, title }) {
    function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
    return (
        <Stats>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map((el) =>
                <ListItem key={el.id} style={{ backgroundColor: randomHexColor() }}>
                    <Label>{el.label}</Label>
                    <Percentage>{el.percentage}%</Percentage>
                </ListItem>
  )}
            </StatList>
        </Stats>
    );
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    )
}


