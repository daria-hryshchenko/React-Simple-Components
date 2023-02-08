import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import info from "./Statistics/info.json";
import user from "./Profile/user.json";
import friends from "./FriendList/friends.json";
import FriendList from "./FriendList/FriendList";
import Transaction from "./Transaction/Transaction";
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploads stats" stats={info} />
      <FriendList friend={friends} />
      <Transaction items={transactions} />
    </>
    
  );
};
