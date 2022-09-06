import React from "react";
import { useSelector } from 'react-redux'
import {
  Navigation,
  NavigationLogo,
  NavigationMenu,
  NavLink,
  LogOut,
} from "./styles";
import Logo from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropDown from "../CartDropDown";
import { useDispatch } from 'react-redux'
import { signOutStart } from '../../store/user/user.actions'
import { selectUser } from "../../store/user/user.selector";

const NavBar = () => {
  const currentUser = useSelector(selectUser)
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch()

  const toogleOpen = () => {
    setVisible(!visible);
  };

  const handleSignOut = () => {
    dispatch(signOutStart())
  }

  return (
    <Navigation>
      <NavigationLogo to="/">
        <img src={Logo} />
      </NavigationLogo>
      <NavigationMenu>
        <NavLink to="/shop">SHOP</NavLink>
        {currentUser ? (
          <LogOut onClick={handleSignOut}>SIGN OUT</LogOut>
        ) : (
          <NavLink to="/login">SIGN IN</NavLink>
        )}
        <CartIcon toogleOpen={toogleOpen} />
      </NavigationMenu>
      {visible && <CartDropDown />}
    </Navigation>
  );
};

export default NavBar;
