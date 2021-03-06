import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './contents/Search';
import Registration from './contents/Registration';
import Logout from './contents/Logout';
import Login from './contents/Login';

const GlobalStyle = createGlobalStyle`
  body{
  background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
  }

`

function App() {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
    
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyle />
    <Router>
    <div className="App">
    <Route exact path="/">
    <Login />
    </Route>
    <Route path="/search">
    <Search />
    </Route>
    <Route path="/registration">
    <Registration />
    </Route>
    <Route path="/logout">
    <Logout />
    </Route>
    </div>
    </Router>
    </>
    </ThemeProvider>
    );
  }
  
  export default App;
  