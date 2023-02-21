import { FriendItem } from './FriendMarkup';
import PropTypes from 'prop-types';

export const FriendsList = ({data}) => {
    return(
    <ul>
        {data.map(({avatar, name, isOnline, id}) => {
            return <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
        })}
    </ul>)
}

FriendsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}