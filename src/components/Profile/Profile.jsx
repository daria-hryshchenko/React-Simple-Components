import user from "./user.json";
import styled from 'styled-components';


function Profile({
    username, tag, location, avatar, stats
}) {
    return (<Card>
        <Title>1# Social network profile</Title>
        <Description>
    <Avatar
      src = {user.avatar}
      alt="User avatar"
    />
            <Name>{user.username}</Name>
            <Tag>@{user.tag}</Tag>
            <Location>{user.location}</Location>
  </Description>

  <Stats>
    <List>
      <Label> Followers</Label>
      <Quantity> {user.stats.followers}</Quantity>
    </List>
    <List>
      <Label> Views</Label>
      <Quantity> {user.stats.views}</Quantity>
    </List>
    <List>
      <Label>Likes</Label>
      <Quantity> {user.stats.likes}</Quantity>
    </List>
  </Stats>
    </Card>);
}

export default Profile;

const Card = styled.div ``
const Description = styled.ul``
const Avatar = styled.img``
const Name = styled.p``
const Tag = styled.p``
const Location = styled.p``
const Stats = styled.p``
const Label = styled.span``
const Quantity = styled.span``
const List = styled.li`` 
const Title = styled.h2``