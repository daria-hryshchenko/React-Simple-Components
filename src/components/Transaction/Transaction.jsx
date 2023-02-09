import { Table, Head, Row, HeaderCell, Body, BodyCell, RowBody } from './TransactionStyle';
import PropTypes from "prop-types";

function Transaction({items}) {
    return (
        <Table>
            <Head>
                <Row>
                    <HeaderCell>Type</HeaderCell>
                    <HeaderCell>Amount</HeaderCell>
                    <HeaderCell>Currency</HeaderCell>
                </Row>
            </Head>

            <Body>
                {items.map((el) =>
                <RowBody key={el.id}>
                    <BodyCell>{ el.type}</BodyCell>
                    <BodyCell>{ el.amount}</BodyCell>
                    <BodyCell>{ el.currency}</BodyCell>
                </RowBody>
    )}
            </Body>
        </Table>
    );
}

export default Transaction;


Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    )
}
