import React from 'react';
import {Grid, Typography} from '@mui/material';

import colors from '../../constants/colors';

import WorkedAt from './components/WorkedAt';
import Bio from './components/Bio';

function AboutMePage() {
  return (
    <Grid container direction="column" paddingTop={3}  style={{ backgroundColor: "#EEEEEE" }}>
      <Grid container direction="row" paddingTop={2} justifyContent="center">
          <Typography style={{color: colors.primary, fontSize: "30px",letterSpacing: 5,fontWeight: 800}} 
          fontFamily="Roboto" align='left'> ABOUT ME </Typography>
      </Grid>
      <br />
      <Bio/>
      <br />
      <WorkedAt/>
      
  </Grid>
  );
}

export default AboutMePage