import React from 'react';
import { Grid, CssBaseline} from '@mui/material';

import HomePage from './components/homePage/HomePage';
// import SlideViewPage from './components/slideViewPage/SlideViewPage';
import WorksPage from './components/worksPage/WorksPage';
import Footer from './components/footer/Footer';
import Admin from './components/admin/Admin';

import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <Grid container direction="column" width="100%" justifyContent="center">
      <CssBaseline/>

      <HomePage/>

      <Grid item>
        <Routes>
        <Route path="/" element={<WorksPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </Grid>


      <div id="contact">
        <Footer/>
      </div>
      
    </Grid>
  );
}

export default App;
