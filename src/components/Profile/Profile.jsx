import styled from 'styled-components';


function Profile({
    username, tag, location, avatar, stats
}) {
    return (<Card>
        <Description>
    <Avatar
      src = {avatar}
      alt="User avatar"
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


const Card = styled.section``
const Description = styled.ul``
const Avatar = styled.img``
const Name = styled.p``
const Tag = styled.p``
const Location = styled.p``
const Stats = styled.p``
const Label = styled.span``
const Quantity = styled.span``
const List = styled.li`` 