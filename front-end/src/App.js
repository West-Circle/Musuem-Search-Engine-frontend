
import React from 'react';
import {  ThemeProvider, createTheme } from '@material-ui/core/styles';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f51b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fa2081',
    },
  },
  typography: {
    // fontFamily: chinese,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      "Microsoft Yahei",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element = {<HomePage/>}></Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
