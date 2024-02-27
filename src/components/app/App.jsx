import './App.css';
import Profile from '../profile/Profile.jsx';
import { userData } from '../../userData.json';
import FriendList from '../friendlist/FriendList.jsx';
import { friends } from '../../friendsData.json';
import TransactionHistory from '../transactionhistory/TransactionHistory.jsx';
import { transactions } from '../../transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
