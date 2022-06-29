import * as React from 'react';

import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import EPSAppBar from './components/nav';



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
        <CssBaseline />
        <EPSAppBar />
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
    </ThemeProvider>
  );
}