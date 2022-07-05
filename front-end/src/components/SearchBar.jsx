import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
            <SearchIcon sx={{ marginRight: '10px' }} />
        </Box>
    )
}

export default SearchBar