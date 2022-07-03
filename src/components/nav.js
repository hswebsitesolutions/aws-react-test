import React from "react"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './static/app-bar-black.png';
import Box from '@material-ui/core/Box';
// import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const pages = ["Home", "EV-Sockets", "Gallery", "Our-Clients", "Contact-Us"]

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
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <HideOnScroll>
            <Box sx={{flexGrow:1}}>
                <AppBar position="sticky">
                {/* <Container maxWidth="x1"> */}
                    <Toolbar>
                        {/* Mobile EPS logo/home button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}  component='a' href="/"><img src={logo} width="15%" alt='logo'/></Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            {/* Icon to open mobile nav menu */}
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* Mobile/small Nav menu */}
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textalign="center">
                                <Link to={`/${page}`}>{page}</Link>
                                </Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>

                        {/* Desktop EPS logo/home button */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  component='a' href=""><img src={logo} width="15%" alt='logo'/></Box>

                        {/* Desktop nav menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <Link to={`/${page}`}>{page}</Link>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                {/* </Container> */}
                </AppBar>
            </Box>
            
        </HideOnScroll>
    );
}

export default EPSAppBar;