import React from 'react';
import {Grid, Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

import colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.white,
    letterSpacing: 1,
    fontWeight: 400
  },
  contentsTitle: {
    color: colors.white,
    fontSize: "16px",
    letterSpacing: 2,
    fontWeight: 300
  },
  icon: {
    fontSize: "22px", 
    color: colors.secondary
  }
}));

function Footer() {
    const classes = useStyles();
  return <Grid container direction="row" justifyContent="center" padding={10} style={{ backgroundColor: colors.primary }}>
    <Grid container direction="column" xs={4} alignItems="flex-start">
      <Typography className={classes.titleText} fontFamily= "Manifesto" fontSize= {40} > SURAFEL KINDU </Typography>
      <Typography className={classes.contentsTitle} fontFamily= "Roboto" > Have a Gread Day! </Typography>
    </Grid>
    <Grid container direction="column" xs={4} alignItems="flex-start">
      <Grid container direction="row" alignItems="center" marginBottom={1}>
          <SchoolIcon className={classes.icon}/>
          &nbsp;&nbsp;&nbsp;
          <Typography className={classes.contentsTitle} fontFamily="Roboto" align='left'>  
          {"Addis Ababa institute of Technology"} 
          </Typography>
      </Grid>
      <Grid container direction="row" alignItems="center" marginBottom={1}>
          <LocationOnIcon className={classes.icon}/>
          &nbsp;&nbsp;&nbsp;
          <Typography className={classes.contentsTitle} fontFamily="Roboto" align='left'>  
          {"Addis Ababa, Ethiopia"} 
          </Typography>
      </Grid>
      <Grid container direction="row" alignItems="center" marginBottom={1}>
          <LocalPhoneIcon className={classes.icon}/>
          &nbsp;&nbsp;&nbsp;
          <Typography className={classes.contentsTitle} fontFamily="Roboto" align='left'>  
          {"+251 942859723"} 
          </Typography>
      </Grid>
    </Grid>
  </Grid>;
}

export default Footer;
