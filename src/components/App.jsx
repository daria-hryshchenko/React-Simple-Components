import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import info from "./Statistics/info.json";
import user from "./Profile/user.json";
import friends from "./FriendList/friends.json";
import FriendList from "./FriendList/FriendList";
import Transaction from "./Transaction/Transaction";
import transactions from './Transaction/transactions.json';
import React from "react";
import styled from "styled-components";

export const App = () => {
  return (
    <Container>
       <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Uploads stats" stats={info} />
      <FriendList friend={friends} />
      <Transaction items={transactions} />
    </Container>
    
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E7ECF2;
  gap: 50px;
  padding: 50px;
  margin: 0;
`
