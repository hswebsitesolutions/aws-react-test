import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router';

import EPSAppBar from './components/nav';
import Home from './components/home';
import Ev from './components/ev';
import Gallery from './components/gallery';
import Clients from './components/clients';
import Contact from './components/contact';


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
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="EV-Sockets" element={<Ev />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Our-Clients" element={<Clients />} />
            <Route path="Contact-Us" element={<Contact />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
}