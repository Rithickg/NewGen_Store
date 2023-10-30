import { BiSearch } from 'react-icons/bi'
import { SearchContainer, SearchInput, Input, SearchResult, List } from '../styles/SearchBar.styled'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../utils/Fetcher'
import { useState } from 'react'

export const SearchBar = () => {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
    console.log("search", data)
    const [filterData, setFilterData] = useState([])

    const handleFilter = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue === '') {
            setFilterData([]);
        } else {
            const filteredData = data.filter((item) => {
                return item.name.toLowerCase().includes(searchValue);
            });
            setFilterData(filteredData.splice(0, 10));
        }
    };
    return (
        <SearchContainer>
            <SearchInput>
                <Input type="search" onChange={handleFilter} placeholder="What are you looking for?" />
                <BiSearch />
            </SearchInput>
            <SearchResult>
                {filterData?.map((search) => (
                    <List key={search._id}>{search.name}</List>
                ))}
            </SearchResult>
        </SearchContainer>

    )
}
