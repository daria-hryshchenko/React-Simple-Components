// import {ListItem, Status, Avatar, Name, List } from './FriendStyledComponents';
import styled from "styled-components";

function FriendList({ friend }) {
      const friendsItems = friend.map((el) =>
        <ListItem value={el.id}>
              <Status>{el.isOnline}</Status>
              <Avatar src={el.avatar} alt="User avatar" width="48"/>
              <Name>{el.name}</Name>
    </ListItem>
  );
    return (
        <List>
        {friendsItems}
       </List>

    );
}

export default FriendList;

const List = styled.ul``
const ListItem = styled.li``
const Status = styled.span``
const Avatar = styled.img``
const Name = styled.p``



