import React from 'react'
import {ReactComponent as ShopingIcon} 
from "../../assets/shopping-bag.svg"
import "./CartIcon.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"

function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
