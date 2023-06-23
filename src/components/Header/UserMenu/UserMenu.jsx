import { useDispatch } from "react-redux";
import avatarDefault from "./awl.png";
import { useAuth } from "hooks";
import { logOut } from "redux/auth/operations";
import {Wrap, Button, Text } from "./UserMenu.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = avatarDefault;
  

  return (
    <Wrap>
      <img src={avatar} alt="" width="32" />
      <Text>Welcome, {user.name} </Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrap>
  )
}