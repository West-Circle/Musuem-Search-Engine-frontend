import React from 'react';
import bg from "../img/background.jpg"
import { withStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import github from '../img/github.jpg';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchBar from './SearchBar'
import Box from '@mui/material/Box';
import BasicCard from '../components/BasicCard';
import Typography from '@mui/material/Typography';
const style = theme => ({
    navBar: {
      background: `url(${bg}) no-repeat center`,
      backgroundSize: 'cover',
      position: 'fixed',
      color: '#2D2D2D',
      height:'150px'
      // paddingTop: '20px'
    },
    toolBar: {
      padding: '0 25px',
      [theme.breakpoints.down("xs")]: {
        padding: "0 2vw"
      }
    },
    navLinks: {
      marginLeft: 'auto',
      marginRight: '30px'
    },
    linkItem: {
      margin: '0 10px'
    },
    searchBar: {
        display: 'flex',
        marginLeft:'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: '70px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    logo: {
      width: '14rem',
      margin: '16px 45px 5px 15px'
    },
    github: {
      width: '35px'
    }
  });

  class NavBar extends React.Component {

    handleChange = (value) => {
        console.log(value);
    }
    getHeader = (e) => {
        return (
            <Box className={e}>
                <SearchBar 
                    placeholder="Search"
                    onChange={this.handleChange()}
                    searchBarWidth='880px'
                />
            </Box>
        )
    }

    getContent = () => {
        <Typography 
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No Search Result yet
        </Typography>
    }
    render() {
      const { classes } = this.props;
      return (
        <AppBar position="fixed" className={classes.navBar}>
          <Toolbar className={classes.toolBar}>
            <Link to='/'>
              <img src={logo} alt="logo" className={classes.logo}/>
            </Link>
            
            <BasicCard
                header={this.getHeader(classes.searchBar)}
                content={this.getContent()}
            />
            
            <div className={classes.navLinks}>
              <Tooltip title="GitHub" aria-label="GitHub">
                <IconButton aria-label="Github" href='https://github.com/thebigdoudou/search-engine-frontend' target='_blank'>
                  <img src={github} alt="github link" className={classes.github} />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      )
    }
  }
  
  export default withStyles(style)(NavBar);