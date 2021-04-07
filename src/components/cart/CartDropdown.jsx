import React from 'react'
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cart.selectors"

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))}
                </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>

            
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
