import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
  height: 70px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #eceff1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: white;
`

export const NavigationLogo = styled(Link)`
  display: grid;
  place-content: center;
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavigationMenu = styled.div`
  width: 60%;
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
