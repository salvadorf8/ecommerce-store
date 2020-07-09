import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const onToken = (token) => {
        console.log(token);
        alert('successful payment');
    };

    return <StripeCheckout label='Pay Now' name='Clothing Ltd.' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY} />;
};

export default StripeCheckoutButton;
