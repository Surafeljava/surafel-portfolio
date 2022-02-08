import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';

import './fonts/Manifesto/MANIFESTO.ttf';

const theme = createTheme({
    palette: {
        primary: {
            main: "#040710" 
        },
        secondary: {
            main: "#FFD016"
        }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
    
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

