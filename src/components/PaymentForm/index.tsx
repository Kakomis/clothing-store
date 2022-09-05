import React, { FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../Button";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./styles";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectUser } from '../../store/user/user.selector'
import { resetCart } from '../../store/cart/cart.actions'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()   
  const dispatch = useDispatch()

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectUser)
  const [isProcessingPayment, setIsProcessingPayment] = React.useState(false)


  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!stripe || !elements) {
        return;
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json())

    const { paymentIntent: { client_secret } } = response

    const cardDetails = elements.getElement(CardElement)

    if(cardDetails === null) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    })

    setIsProcessingPayment(false)

    if(paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if(paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
        dispatch(resetCart())
      }
    }

  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
