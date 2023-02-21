// import styled from '@emotion/styled'
import { Container } from './App.module'
import { Profile } from './task1/Profile'
import { StatisticList } from './task2/StatisticList'
import { FriendsList } from './task3/FriendList';
import { TransactionsList } from './task4/TransactionsList';
import user from './task1/user.json';
import data from './task2/data.json';
import friends from './task3/friends.json';
import transactions from './task4/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <StatisticList title='Statistic' data={data}/>
      <FriendsList data={friends}/>
      <TransactionsList data={transactions}/>
    </Container>
  );
};
