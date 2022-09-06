import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid #eceff1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: white;
`

export const NavigationLogo = styled(Link)`
  width: 70px;
  display: grid;
  place-content: center;
  height: 100%;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`

export const NavigationMenu = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  font-size: 0.8rem;
  padding: 10px 15px;
  cursor: pointer;
`

export const LogOut = styled.span`
  font-size: 0.8rem;
  padding: 10px 15px;
  cursor: pointer;
`
