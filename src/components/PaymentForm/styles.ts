import styled from 'styled-components'
import Button from '../Button'

export const PaymentFormContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    width: 100%;
    height: auto;
`

export const PaymentButton = styled(Button)`
    margin: 30px auto;
`