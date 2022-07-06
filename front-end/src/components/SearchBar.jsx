import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import { cardHeaderStyles } from './styles';
import IconButton from '@mui/material/IconButton';
import SelectInput from '@mui/material/Select/SelectInput';
// SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:"",
            click:false,
        }
    }

    onChange = (e) => {
        this.setState({
            input:e.target.value,
        })
        console.log(e.target.value)
        console.log(this.state.input,"###")
    }


    handleSearch = (e) =>{
        console.log(e)
        this.setState({
            click: true
        })
        console.log(this.state.input,"###",this.state.click);
        
        /*
        this.props.history.push({
            pathname: `/search/query/${input}`,
            query: {
            input: input
            }
        });
        */
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleSearch}>
            <Box sx={cardHeaderStyles.wrapper}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                    <Input
                        placeholder="Search"
                        autoComplete=''
                        onChange={this.onChange}
                        value={this.state.input}
                        sx={{width: '880px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                        disableUnderline
                    />
                    <IconButton type="submit">
                        <SearchIcon sx={{ marginRight: '20px' }}>
                        </SearchIcon>
                    </IconButton>
                    
                </Box> 
            </Box>
            </form>
            </div>
        )
    }
}

export default SearchBar