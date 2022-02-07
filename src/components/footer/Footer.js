import React from 'react';
import {Grid} from '@mui/material';

import colors from '../../constants/colors';

function Footer() {
  return <Grid container direction="row" justifyContent="space-evenly" padding={10} style={{ backgroundColor: colors.primary }}>
    <h1> H! </h1>
    <h1> H! </h1>
    <h1> H! </h1>
  </Grid>;
}

export default Footer;
