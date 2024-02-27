import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  const friendStatus = () => {
    return isOnline === true ? (
      <p className={css.onlineStatus} style={{ color: 'green' }}>
        Online
      </p>
    ) : (
      <p className={css.onlineStatus} style={{ color: 'red' }}>
        Offline
      </p>
    );
  };

  return (
    <div>
      <img
        className={css.avatar}
        src={avatar}
        alt="Friend's Avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
      {friendStatus()}
    </div>
  );
};

export default FriendListItem;
