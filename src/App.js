import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import logo from './static/app-bar-black.png';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe800',
      light: '#ffff56',
      dark: '#c7b600',
    },
    secondary: {
      main: '#64656a',
      light: '#929398',
      dark: '#3a3b3f',
    },
    text:{
      primary: '#000000',
      secondary: 'ffffff',
    },
    background:{
      default: '#64656a',
    }
  }
});

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Box ml={"15%"}><img src={logo} width="15%"/></Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>
          <Box sx={{ my: 2 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}