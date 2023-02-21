import user from './user.json';
import { InfoContainer, Avatar, ContainerForProfile, Text, List, ListItem } from './Profile.module'
import PropTypes from 'prop-types';


console.log(user);
export const Profile = ({username, tag, location, avatar, stats}) => {
   return <ContainerForProfile>
  <InfoContainer>
    <Avatar src={avatar} alt={tag}/>
    <Text>{username}</Text>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </InfoContainer>

  <List>
    <ListItem>
      <Text>Followers</Text>
      <Text>{stats.followers}</Text>
    </ListItem>
    <ListItem>
      <Text>Views</Text>
      <Text>{stats.views}</Text>
    </ListItem>
    <ListItem>
      <Text>Likes</Text>
      <Text>{stats.likes}</Text>
    </ListItem>
  </List>
</ContainerForProfile>
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}