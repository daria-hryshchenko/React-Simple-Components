import FriendListItem from "./FriendListItem";
import { List } from './FriendListStyle';

function FriendList({ friend }) {
     
    return (
      <List>
        {friend.map(({ avatar, name, isOnline, id }) => {
          return <FriendListItem  avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}/>
        })}
       </List>
    );
}

export default FriendList;





