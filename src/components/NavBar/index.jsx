import React from "react";
import { useSelector, shallowEqual } from 'react-redux'
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

const NavBar = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
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
          <NavLink to="/sign-in">SIGN IN</NavLink>
        )}
        <CartIcon toogleOpen={toogleOpen} />
      </NavigationMenu>
      {visible && <CartDropDown />}
    </Navigation>
  );
};

export default NavBar;
