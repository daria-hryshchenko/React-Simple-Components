import {ListItem, Status, Avatar, Name} from './FriendListStyle';
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <ListItem key={id}>
            <Status statusType={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
    );
}

FriendListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ),
};


export default FriendListItem;