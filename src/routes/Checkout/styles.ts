import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const CheckoutHeader = styled.ul`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.li`
  list-style: none;
  text-transform: capitalize;
  font-size: 1rem;
  width: 23%;
  
  &:last-child {
      width: 8%;
  }

  @media screen and (max-width: 768px) {
    width: 21%;
    font-size: 0.65rem;
    text-align: center;

    &:last-child {
      width: 16%;
    }
  }
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 1.6rem;
`

