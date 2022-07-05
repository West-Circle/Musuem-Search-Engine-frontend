import React from 'react';
import Navbar from '../components/NavBar';
import Typography from '@mui/material/Typography'
import { withStyles } from "@mui/styles";
import bg from '../img/background.jpg'
const style = theme => ({
    main: {
        backgroundColor: '#ffffff',
        minHeight: '100%',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
    },
    wrapper: {
        padding: '100px 35px 35px 35px',
        [theme.breakpoints.down("xs")]: {
          padding: "10px 10px"
        },
        margin: '25px 25px'
    },
    footer:{
        background: `url(${bg}) no-repeat center`,
        backgroundSize: 'cover',
        position: 'fixed',
        color: '#2D2D2D',
        height:'50px',
        textAlign:'center',
        width:'100%',
        color: '#FFFFFF',
        position:'fixed',
        bottom:0,
        alignItems: 'center',
    }
})
class ResultPage extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.main}>
                <Navbar/>
                <div className={classes.wrapper}>
                </div>
                <footer className={classes.footer}>
                        <Typography variant="body2" component="p">
                            Copyright © <a href="https://github.com/West-Circle/VSE-front-end" style={{color:'white'}}> G13</a>
                            <br/>
                            @Zhejiang University. All Rights Reserved.
                        </Typography>
                </footer>
            </div>
        )
    }
}

export default withStyles(style)(ResultPage);