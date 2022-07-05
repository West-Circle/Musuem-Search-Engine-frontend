import React from 'react';
import { withStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
//import SearchBar from '../components/SearchBar1'
import bg from "../img/background.jpg"
import logo from "../img/logo1.png"
import SearchBar from '../components/SearchBar';
import BasicCard from '../components/BasicCard';
import Box from '@mui/material/Box';
import { cardHeaderStyles } from './styles';
const style = theme => ({
    root:{
        height:'100%',
    },
    wrapper:{
        width:'100%',
        height:'100%',
        background: `url(${bg}) no-repeat center`,
        backgroundSize:'cover',
        position:'fixed',
    },
    title: {
        marginLeft: '600px',
        marginTop: '100px',
        textAlign:'center',
        alignItems:'center',
        color: '#ffffff',
        display: 'flex',
    },
    navBar: {
        backgroundColor: 'transparent',
        color: "#ffffff",
        boxShadow: '0 0 0 0',
        padding: '0px 30px'
    },
    content: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        textAlign:'center',
        width:'100%',
        color: '#FFFFFF',
        position:'fixed',
        bottom:20,
        alignItems: 'center',
    }
});

class HomePage extends React.Component {
    state={
        input:"",
    }

    handleChange = (value) =>{
        console.log(value)
    }
    
    getHeader = () => {
        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar 
                    placeholder="Search"
                    onChange={this.handleChange()}
                    searchBarWidth='900px'
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

    render(){
        const {classes} = this.props;
        console.log(this.props);
        return(
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div>
                        {/*logo and search bar*/}
                        <div className={classes.title}>
                            <img src={logo} alt="musuem logo" style={{textAlign:'center', width:350}}></img>
                        </div>
                        <BasicCard
                                header={this.getHeader()}
                                content={this.getContent()}
                        />
                    </div>
                    <footer className={classes.footer}>
                        <Typography variant="body2" component="p">
                            Copyright © <a href="https://github.com/West-Circle/VSE-front-end" style={{color:'white'}}> G13</a>
                            <br/>
                            @Zhejiang University. All Rights Reserved.
                        </Typography>
                    </footer>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(HomePage);
