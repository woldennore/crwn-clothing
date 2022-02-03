import React from "react";
import './stripe-button.styles.scss'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey ='pk_test_51KOuEzBfLUmdL4ZovpJV3hZ1jXQTXItbDqSQkSuNSnZQPdTPJ1j2nj3UnEvJVlwCfxfZQEqanMoeIqUNuKh76Xti00q0Xi2b5w';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
    <StripeCheckout 
    label="Pay Now"
    name="CRWN Clothing Ltd."
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    />
    );
};


export default StripeCheckoutButton;
