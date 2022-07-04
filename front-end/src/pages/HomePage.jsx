import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bg from "../img/background.jpg"
import logo from "../img/logo.png"
import logo1 from "../img/logo1.png"
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
        marginLeft: '15px',
        marginTop: '150px',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center'
    },
    navBar: {
        backgroundColor: 'transparent',
        color: "#ffffff",
        boxShadow: '0 0 0 0',
        padding: '20px 30px'
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

    render(){
        const {classes} = this.props;
        console.log(this.props);
        return(
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <AppBar position='absolute' className={classes.navBar}>
                        <Toolbar>

                        </Toolbar>
                    </AppBar>
                    <div>
                        {/*logo and search bar*/}
                        <div className={classes.title}>
                            <img src={logo1} alt="musuem logo" style={{width:350}}></img>
                        </div>

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
