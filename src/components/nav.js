import React from "react"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './static/app-bar-black.png';
import Box from '@material-ui/core/Box';

// const pages = ["Home", "EV Sockets", "Gallery", "Our Clients", "Contact Us"]

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const EPSAppBar = () => {
    return(
        <HideOnScroll>
            <AppBar>
                <Toolbar variant='dense'>
                    <Box pl={"10%"}><img src={logo} width="15%" alt='logo'/></Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default EPSAppBar;