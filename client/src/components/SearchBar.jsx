import { BiSearch } from 'react-icons/bi'
import { SearchInput, Input, SearchResult, List } from '../styles/SearchBar.styled'
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
        const filterData = data.filter((item) => {
            return item.name.toLowerCase().includes(searchValue)
        })
        setFilterData(filterData)
        console.log(filterData)
    }
    console.log("filter", filterData)

    return (
        <>
            <SearchInput>
                <Input type="search" onChange={handleFilter} placeholder="What are you looking for?" />
                <BiSearch />
            </SearchInput>
            <SearchResult>
                {filterData?.map((search) => (
                    <List key={search._id}>{search.name}</List>
                ))}
            </SearchResult>
        </>

    )
}
