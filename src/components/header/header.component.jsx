import React from "react";
import './header.styles.scss';
import {ReactComponent as Logo}  from '../../assets/crown.svg';
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { OpitionsContainer } from "./header.styles";
import { OptionLink } from "./header.styles";
import { LogoContainer } from "./header.styles";
import { HeaderContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OpitionsContainer>
            <OptionLink  to="/shop">
                SHOP
            </OptionLink>
            <OptionLink  to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div'  onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink  to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OpitionsContainer>
        {
            hidden ? null
            :
            <CartDropDown />
        }   
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);