import { IsOnline } from './FriendList.module';
import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <IsOnline isOnline={isOnline} />
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
