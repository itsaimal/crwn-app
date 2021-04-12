import React from 'react'
import StripeCheckout from "react-stripe-checkout"

function StripeButton({price}) {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IfQUVExZNHBrHLsqwdKtUP5X6QOEToPyVmOlFMZRdLzFFZaMp0JWBqXYmNEjLasrktnSubE7Lqb3W3ucjamGeHK007WsNJ7cO'
            
    const onToken = token => {
        console.log(token)
        alert(
            'Payment Successful'
        )
    }
    return (
        <div>
            <StripeCheckout
            label="Pay Now"
            name="Crown app Ltd.
            "
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your totsl is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            
            />
        
        </div>
    )
}

export default StripeButton
