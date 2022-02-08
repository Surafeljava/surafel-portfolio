import React from 'react';
import {Grid, Typography, Button} from "@mui/material";

import DesignsCard from './DesignsCard';

import { makeStyles } from "@mui/styles";

import colors from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.primary,
    fontSize: "25px",
    letterSpacing: 5,
    fontWeight: 500
  },
  seeAllText: {
    color: colors.primary + 'AA',
    fontSize: "15px",
    letterSpacing: 2,
    fontWeight: 400
  }
}));

function DesignsPage({work}) {
    const classes = useStyles();
  return <>
        <Grid container direction="row" justifyContent="flex-start">
            <Typography className={classes.titleText} fontFamily="Roboto" align='left'>  {work.design.title.toUpperCase()} </Typography>
        </Grid>
        <br />
        <Grid container direction="row" justifyContent="flex-start">
            {work.files.length === 0 && (
                <h2> No designs posted yet </h2>
            )}

            {work.files.length !== 0 && (
                work.files.map((file) => (
                    <Grid item xs={3} key={file.title} marginRight={3} marginBottom={3}>
                        <DesignsCard design={file}/>
                    </Grid>
                ))
            )}
        </Grid>
        <Grid container direction="row" justifyContent="flex-end">
            <Button variant='text'>
                <Typography className={classes.seeAllText} fontFamily="Roboto" align='left'>  See all </Typography>
            </Button>
        </Grid>
    </>;
}

export default DesignsPage;
