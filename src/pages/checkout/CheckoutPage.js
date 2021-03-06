import React from 'react'
import "./CheckoutPage.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkout-item/CheckoutItem"
import StripeButton from "../../components/stripe-button/StripeButton"

function CheckoutPage({cartItems,total}) {
    return (
        <div className="checkout-page">
         
<div className="checkout-header">
    <div className="header-block">
        <span></span>

    </div>
    <div className="header-block">
        <span>Product</span>

    </div>

    <div className="header-block">
        <span>Description</span>

    </div>

    <div className="header-block">
        <span>Quantity</span>

    </div>

    <div className="header-block">
        <span>Price</span>

    </div>
    
    <div className="header-block">
        <span>Remove</span>

    </div>
    


</div>

{cartItems.map(cartItem => (<CheckoutItem  cartItem={cartItem} key={cartItem.id}/>))}

<div className="total">
    <span>TOTAL: ${total}</span>
</div>
<div className="test-warning">
    *Please use the following test credit card for payments*
    <br/>
    4242 4242 4242 4242  Exp:current date - CVV: 123
</div>
<StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
