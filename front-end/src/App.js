
import React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route,Switch} from "react-router-dom"
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound';
import ResultPage from './pages/ResultPage'
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
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/search/query/:input" component = {ResultPage}></Route>
          {/*<Route path="/search/query/:input" element = {<ResultPage/>}></Route>
          */}
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
