import React from 'react';
import { Grid, Typography } from '@mui/material';

import { makeStyles } from "@mui/styles";

import colors from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.primary + '88',
    fontSize: "30px",
    letterSpacing: 5,
    fontWeight: 100
  }
}));

function ResearchesPage() {
    const classes = useStyles();
  return <Grid container direction="column" padding={10}>
      <Grid container direction="row" justifyContent="center">
        <Typography className={classes.titleText} fontFamily="Roboto" align='left'>  {"Under Construction".toUpperCase()} </Typography>
    </Grid>
  </Grid>;
}
export default ResearchesPage;
