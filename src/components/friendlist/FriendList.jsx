import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendListContainer}>
      <ul className={css.friendListElement}>
        {friends.map(eachItem => {
          const {
            id,
            name = 'N/A',
            avatar = 'https://www.shutterstock.com/shutterstock/photos/1677509740/display_1500/stock-vector-default-avatar-profile-icon-social-media-user-vector-1677509740.jpg',
            isOnline = false,
          } = eachItem;
          return (
            <li key={id} className={css.friendListItemElement}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
