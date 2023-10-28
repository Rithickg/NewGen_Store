import { BiSearch } from 'react-icons/bi'
import { SearchInput, Input } from '../styles/SearchBar.styled'

export const SearchBar = () => {
    return (
        <SearchInput >
            <Input type="search" placeholder="What are you looking for?" />
            <BiSearch />
        </SearchInput>
    )
}
