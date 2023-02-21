import { IsOnline } from './FriendList.module'

export const FriendItem = ({avatar, name, isOnline}) => {
    return (
    <li>
        <IsOnline isOnline={isOnline}/>
        <img src={avatar} alt="User avatar"/>
        <p>{name}</p>
    </li>
  )
}