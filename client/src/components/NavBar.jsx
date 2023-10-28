import { SearchBar } from "./SearchBar"
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Nav, OrderList } from "../styles/NavBar.styled"

export const NavBar = () => {
    return (
        <Nav>
            <span>NewGen</span>
            <SearchBar />
            <OrderList>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Sign Up</li>
            </OrderList>
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
        </Nav>
    )
}
