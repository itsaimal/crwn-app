import React from 'react'


import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart/CartDropdown"
import {createStructuredSelector} from "reselect"

import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from "./Header.styles"

import {signOutStart} from "../../redux/user/user.actions"

function Header({currentUser,hidden, signOutStart}) {
    return (
        <HeaderContainer>
<LogoContainer to="/">
<Logo className="logo"/>
</LogoContainer>

<OptionsContainer>
    <OptionLink to="/shop">SHOP</OptionLink>

    <OptionLink to="/shop">CONTACT</OptionLink>

    { currentUser ?( <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink> ): (<OptionLink to="/signin">SIGN IN</OptionLink>)}

    <CartIcon/>

</OptionsContainer>{ hidden ? null :
<CartDropdown/>}
            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
