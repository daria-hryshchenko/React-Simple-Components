import { Table, Head, Row, HeaderCell, Body, BodyCell, RowBody } from './TransactionStyle';


function Transaction({items}) {

    const transitionItems = items.map((el) =>
        <RowBody key={el.id}>
            <BodyCell>{ el.type}</BodyCell>
            <BodyCell>{ el.amount}</BodyCell>
            <BodyCell>{ el.currency}</BodyCell>
        </RowBody>
    );

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
                {transitionItems}
            </Body>
        </Table>
    );
}

export default Transaction;
