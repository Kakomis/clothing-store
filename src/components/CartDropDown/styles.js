import styled from 'styled-components'
import {
  BaseButton,
  GoogleButton,
  InvertedButton
} from '../Button/styles'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 12px;
  z-index: 5;

  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: auto;
  } 
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessage = styled.span`
  font-size: 1.4rem;
  margin: 50px auto;
  text-align: center;
`
  