import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1.8rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 21%;
    padding: 4px;
  }
`

export const Name = styled.span`
  width: 23%;
  
  @media screen and (max-width: 768px) {
    width: 21%;
    text-align: center;
  }
`

export const Price = styled.span`
  width: 23%;
  
  @media screen and (max-width: 768px) {
    width: 21%;
    text-align: center;
  }
`
export const Quantity = styled.span`
  width: 23%;
  display: flex;
  
  @media screen and (max-width: 768px) {
    width: 21%;
    align-items: center;
    justify-content: center;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.div`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 16%;
    text-align: center;
  }
`
