import {Card, Description, Avatar, Name, Tag, Location, Stats, List, Label, Quantity } from './ProfileStyle';
import PropTypes from "prop-types";

function Profile({
    username, tag, location, avatar, stats
}) {
    return (<Card>
        <Description>
    <Avatar
      src = {avatar}
          alt="User avatar"
          width="150px"
    />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
  </Description>

  <Stats>
    <List>
      <Label> Followers</Label>
      <Quantity> {stats.followers}</Quantity>
    </List>
    <List>
      <Label> Views</Label>
      <Quantity> {stats.views}</Quantity>
    </List>
    <List>
      <Label>Likes</Label>
      <Quantity> {stats.likes}</Quantity>
    </List>
  </Stats>
    </Card>);
}

export default Profile;


Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}