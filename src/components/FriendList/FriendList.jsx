import {ListItem, Status, Avatar, Name, List } from './FriendListStyle';
import PropTypes from "prop-types";

function FriendList({ friend }) {
      const friendsItems = friend.map((el) =>
        <ListItem key={el.id} value={el.id}>
              <Status statusType={el.isOnline}></Status>
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

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};




