import React from 'react'
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/cart/cart.actions"

function CartDropdown({cartItems,history,dispatch}) {
    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {cartItems.length ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))) : (<span className="empty-message">
                    Your cart is empty
                </span>)}
                </div>
                <CustomButton onClick={()=>{history.push('/checkout');
            dispatch(toggleCartHidden());}}>GO TO CHECKOUT</CustomButton>

            
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
