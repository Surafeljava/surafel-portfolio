import React from 'react';
import { Grid, CssBaseline} from '@mui/material';

import HomePage from './components/homePage/HomePage';
import SlideViewPage from './components/slideViewPage/SlideViewPage';

function App() {

  return (
    <Grid container direction="column" width="100%" justifyContent="center">
      <CssBaseline/>
      <HomePage/>
      <br />
      <div id="myworks">
        <SlideViewPage/>
      </div>
      
    </Grid>
  );
}

export default App;
