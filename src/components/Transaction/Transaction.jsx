import styled from "styled-components";


function Transaction({items}) {

    const transitionItems = items.map((el) =>
        <Row value={el.id}>
            <BodyCell>{ el.type}</BodyCell>
            <BodyCell>{ el.amount}</BodyCell>
            <BodyCell>{ el.currency}</BodyCell>
        </Row>
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

const Table = styled.table``
const Head = styled.thead``
const Row = styled.tr``
const HeaderCell = styled.th``
const Body = styled.tbody``
const BodyCell = styled.td``