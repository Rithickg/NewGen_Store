import { SearchBar } from "./SearchBar"

export const NavBar = () => {
    return (
        <nav>
            <span>NewGen</span>
            <SearchBar />
            <ol>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Sign Up</li>
            </ol>
        </nav>
    )
}
