import React from 'react';
import {Grid, Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

import colors from '../../../constants/colors';

import portrait from '../../../assets/portrait2.jpg';

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: colors.primary,
    fontSize: "18px",
    letterSpacing: 1,
    fontWeight: 400
  },
  contentsTitle: {
    color: colors.primary,
    fontSize: "16px",
    letterSpacing: 2,
    fontWeight: 400
  },
  icon: {
    fontSize: "22px", 
    color: colors.primary + '66'
  }
}));

function Bio() {
    const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="center" paddingBottom={2} paddingTop={2}>
        <Grid item xs={3} paddingBottom={2} marginRight={4}>
            <img src={portrait} alt="Portfolio" width="100%" style={{borderRadius:"20px"}}/>
        </Grid>
        <Grid container direction="column" width="700px">
            <Typography className={classes.titleText} fontFamily="Roboto" align='left'>  
            {"My Name is Surafel Kindu, 5th year software engineering student. I'm very passionate about Graphics Designing and Software Development."} 
            </Typography>
            <br />
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
    </Grid>
  );
}

export default Bio;