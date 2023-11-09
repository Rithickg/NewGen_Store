import { SearchBar } from "./SearchBar"
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { LinkStyled, Nav, OrderList } from "../styles/NavBar.styled"

export const NavBar = () => {
    return (
        <Nav>
            <span>NewGen</span>
            <SearchBar />
            <OrderList>
                <li><LinkStyled to="/">Home</LinkStyled></li>
                <li><LinkStyled to="/about">About</LinkStyled></li>
                <li><LinkStyled to="/contact">Contact</LinkStyled></li>
                <li><LinkStyled to="/signup">Sign Up</LinkStyled></li>
            </OrderList>
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
        </Nav>

    )
}
