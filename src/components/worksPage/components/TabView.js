import React from 'react';
import {Grid, Typography, Divider, Button} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

import { makeStyles } from "@mui/styles";

import colors from '../../../constants/colors';

const useStyles = makeStyles((theme) => ({
  tabButtons: {
    color: colors.primary + "CC",
    fontSize: "20px",
    letterSpacing: 10,
    fontWeight: 100,
    "&:hover": {
      color: colors.primary,
    },
    transition: "0.3s"
  }
}));

function TabView({onTabClicked}) {
    const classes = useStyles();
  return <Grid container direction="row" width="100%" justifyContent="space-between" alignItems="flex-end" paddingLeft={5} paddingRight={5}>
      <br />
      <Button variant='text' onClick={()=>{
          onTabClicked(0);
      }}>
          <Grid container direction="column" width="300px" >
            <Typography className={classes.tabButtons} fontFamily="Roboto" align='left'>  GRAPHICS DESIGNS </Typography>
            <br />
            <Divider textAlign="left"><CircleIcon color="secondary" fontSize='10px'/></Divider>
        </Grid>
      </Button>
      <br />
      <Button variant='text' onClick={()=>{
          onTabClicked(1);
      }}>
        <Grid container direction="column"  width="300px">
            <Typography className={classes.tabButtons} fontFamily="Roboto" align='left'>  SOFTWARE DEVELOPMENT </Typography>
            <br />
            <Divider textAlign="left"><CircleIcon color="primary" fontSize='8px'/></Divider>
        </Grid>
      </Button>
      <br />
      <Button variant='text' onClick={()=>{
          onTabClicked(2);
      }}>
        <Grid container direction="column"  width="300px">
            <Typography className={classes.tabButtons} fontFamily="Roboto" align='left'>  RESEARCHES MATERIALS </Typography>
            <br />
            <Divider textAlign="left"><CircleIcon color="primary" fontSize='8px'/></Divider>
        </Grid>
      </Button>
      <br />
  </Grid>;
}

export default TabView;
